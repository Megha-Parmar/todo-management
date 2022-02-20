import { Router } from '@angular/router';
import { routerReducer } from '@ngrx/router-store';
// Angular
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../../../../../../app/views/services/shared.service';
import { CommonService } from '../../../../../../app/views/services/common.service';
import { Store } from '@ngrx/store';
import { Logout } from '../../../../../../app/core/auth';
import { AppState } from '../../../../../../app/core/reducers';

@Component({
	selector: 'kt-user-profile',
	templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
	// Public properties
	public user: any;
	profileImage: any;

	@Input() avatar = true;
	@Input() greeting = true;
	@Input() badge: boolean;
	@Input() icon: boolean;

	constructor(
		private sharedService: SharedService,
		private router: Router,
		private commonService: CommonService,
		private store: Store<AppState>,
		private cdRef: ChangeDetectorRef) { }

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit(): void {
		this.user = this.sharedService.getUser();
	}

	logout() {
		this.commonService.logout();
		this.cdRef.detectChanges();
		// window.location.href = `${window.location.origin}/fixed_assets/auth/login`;
		this.router.navigate(['/auth/login']);
	}

	openProfile() {
		alert("Under Implementation");
	}

	changePassword() {
		alert("Under Implementation");
	}

}
