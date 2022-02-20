// Angular
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
// RxJS
import { Observable, Subscription } from 'rxjs';
// Object-Path
import * as objectPath from 'object-path';
// Layout
import { LayoutConfigService, MenuConfigService, PageConfigService } from '../../../core/_base/layout';
import { HtmlClassService } from '../html-class.service';
import { LayoutConfig } from '../../../core/_config/layout.config';
import { MenuConfig } from '../../../core/_config/menu.config';
import { AdminMenuConfig } from '../../../core/_config/admin-menu.config';
import { PageConfig } from '../../../core/_config/page.config';
// User permissions
import { NgxPermissionsService } from 'ngx-permissions';
import { currentUserPermissions, Permission } from '../../../core/auth';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../core/reducers';
import { SharedService } from '../../services/shared.service';
import { UserMenuConfig } from '../../../../../src/app/core/_config/user-menu.config';
import { SubUserMenuConfig } from '../../../../../src/app/core/_config/subuser-menu.config';

@Component({
	selector: 'kt-base',
	templateUrl: './base.component.html',
	styleUrls: ['./base.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class BaseComponent implements OnInit, OnDestroy {
	// Public variables
	selfLayout: string;
	asideDisplay: boolean;
	asideSecondary: boolean;
	subheaderDisplay: boolean;
	desktopHeaderDisplay: boolean;	
	fitTop: boolean;
	fluid: boolean;

	// Private properties
	private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
	private currentUserPermissions$: Observable<Permission[]>;


	/**
	 * Component constructor
	 *
	 * @param layoutConfigService: LayoutConfigService
	 * @param menuConfigService: MenuConfifService
	 * @param pageConfigService: PageConfigService
	 * @param htmlClassService: HtmlClassService
	 * @param store
	 * @param permissionsService
	 */
	constructor(
		private layoutConfigService: LayoutConfigService,
		private menuConfigService: MenuConfigService,
		private pageConfigService: PageConfigService,
		private htmlClassService: HtmlClassService,
		private sharedService: SharedService,
		private store: Store<AppState>,
		private permissionsService: NgxPermissionsService) {
		this.loadRolesWithPermissions();

		const role = this.sharedService.getRole();
		// console.log(role);
		if (role === 'admin') {
			this.menuConfigService.loadConfigs(new AdminMenuConfig().configs)
		  
		} else if (role === 'user') {
			this.menuConfigService.loadConfigs(new UserMenuConfig().configs);
		} else if(role === 'SUB_USER') {
			this.setMenubar()
		} 
		else {
			this.menuConfigService.loadConfigs(new MenuConfig().configs);
		}
		this.layoutConfigService.loadConfigs(new LayoutConfig().configs);
		this.pageConfigService.loadConfigs(new PageConfig().configs);

		// setup element classes
		this.htmlClassService.setConfig(this.layoutConfigService.getConfig());

		const subscr = this.layoutConfigService.onConfigUpdated$.subscribe(layoutConfig => {
			// reset body class based on global and page level layout config, refer to html-class.service.ts
			document.body.className = '';
			this.htmlClassService.setConfig(layoutConfig);
		});
		this.unsubscribe.push(subscr);
	}
	setMenubar() {
		let response: any = this.sharedService.getSubUserPermissions();
		console.log(response);
		let d = new SubUserMenuConfig();
		d.defaults = {
			header: {},
			aside: {
				self: {},
				items: []
			}
		}
		for (let i = 0; i < response.modules.length; i++) {
			let obj = {
				title: response.modules[i].longName,
				desc: response.modules[i].longName,
				icon: "flaticon-home-1",
				// page: "/dashboard",
				submenu: []
			}
			d.defaults.aside.items.push(obj)
			for (let j = 0; j < response.modules[i].functions.length; j++) {
				let obj = {
					title: response.modules[i].functions[j].name,
					desc: response.modules[i].functions[j].name,
					icon: "flaticon-home-1",
					page: "/" + response.modules[i].functions[j].name.toLowerCase().replace(/\s+/g, ''),
					// submenu: []
				}
				d.defaults.aside.items[i].submenu.push(obj)
			}
		}

		this.menuConfigService.loadConfigs(d.configs);

	}
	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit(): void {
		const config = this.layoutConfigService.getConfig();
		this.selfLayout = objectPath.get(config, 'self.layout');
		this.asideDisplay = objectPath.get(config, 'aside.self.display');
		this.subheaderDisplay = objectPath.get(config, 'subheader.display');
		this.desktopHeaderDisplay = objectPath.get(config, 'header.self.fixed.desktop');
		this.fitTop = objectPath.get(config, 'content.fit-top');
		this.fluid = objectPath.get(config, 'content.width') === 'fluid';

		// let the layout type change
		const subscr = this.layoutConfigService.onConfigUpdated$.subscribe(cfg => {
			setTimeout(() => {
				this.selfLayout = objectPath.get(cfg, 'self.layout');
			});
		});
		this.unsubscribe.push(subscr);
	}

	/**
	 * On destroy
	 */
	ngOnDestroy(): void {
		this.unsubscribe.forEach(sb => sb.unsubscribe());
	}

	/**
	 * NGX Permissions, init roles
	 */
	loadRolesWithPermissions() {
		this.currentUserPermissions$ = this.store.pipe(select(currentUserPermissions));
		const subscr = this.currentUserPermissions$.subscribe(res => {
			if (!res || res.length === 0) {
				return;
			}

			this.permissionsService.flushPermissions();
			res.forEach((pm: Permission) => this.permissionsService.addPermission(pm.name));
		});
		this.unsubscribe.push(subscr);
	}
}