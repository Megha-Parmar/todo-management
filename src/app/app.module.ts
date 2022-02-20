import { MatSortModule } from '@angular/material';
// Angular
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestureConfig, MatProgressSpinnerModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';
// Angular in memory
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// Perfect Scroll bar
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
// SVG inline
import { InlineSVGModule } from 'ng-inline-svg';
// Env
import { environment } from '../environments/environment';
// Hammer JS
import 'hammerjs';
// NGX Permissions
import { NgxPermissionsModule } from 'ngx-permissions';
// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// State
import { metaReducers, reducers } from './core/reducers';
// Copmponents
import { AppComponent } from './app.component';
// Modules
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { ThemeModule } from './views/theme/theme.module';
// Partials
import { PartialsModule } from './views/partials/partials.module';
// Layout Services
import {
	DataTableService,
	FakeApiService,
	KtDialogService,
	LayoutConfigService,
	LayoutRefService,
	MenuAsideService,
	MenuConfigService,
	MenuHorizontalService,
	PageConfigService,
	SplashScreenService,
	SubheaderService
} from './core/_base/layout';
import { HttpUtilsService, LayoutUtilsService, TypesUtilsService } from './core/_base/crud';
// Config
import { LayoutConfig } from './core/_config/layout.config';
// Highlight JS
import { HIGHLIGHT_OPTIONS, HighlightLanguage } from 'ngx-highlightjs';
import * as typescript from 'highlight.js/lib/languages/typescript';
import * as scss from 'highlight.js/lib/languages/scss';
import * as xml from 'highlight.js/lib/languages/xml';
import * as json from 'highlight.js/lib/languages/json';

import { AngularFireModule } from 'angularfire2';
import { OwlDateTimeIntl, OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AuthService } from './core/auth';
import { TokenInterceptorService } from './views/services/tokenInterceptor.service';
import { SharedService } from './views/services/shared.service';
import { taskReducer } from './core/auth/_reducers/task.reducers';
// import { RouterTestingModule } from '@angular/router/testing';
// import { taskReducer } from './core/auth/_reducers/task.reducers';
// tslint:disable-next-line:class-name
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	wheelSpeed: 0.5,
	swipeEasing: true,
	minScrollbarLength: 40,
	maxScrollbarLength: 300,
};

export function initializeLayoutConfig(appConfig: LayoutConfigService) {
	// initialize app by loading default demo layout config
	return () => {
		if (appConfig.getConfig() === null) {
			appConfig.loadConfigs(new LayoutConfig().configs);
		}
	};
}

export function hljsLanguages(): HighlightLanguage[] {
	return [
		{ name: 'typescript', func: typescript },
		{ name: 'scss', func: scss },
		{ name: 'xml', func: xml },
		{ name: 'json', func: json }
	];
}

export class DefaultIntl extends OwlDateTimeIntl {
	/** A label for the up second button (used by screen readers).  */
	// upSecondLabel= 'Add a second',

	/** A label for the down second button (used by screen readers).  */
	// downSecondLabel= 'Minus a second',

	/** A label for the up minute button (used by screen readers).  */
	// upMinuteLabel= 'Add a minute',

	/** A label for the down minute button (used by screen readers).  */
	// downMinuteLabel= 'Minus a minute',

	/** A label for the up hour button (used by screen readers).  */
	// upHourLabel= 'Add a hour',

	/** A label for the down hour button (used by screen readers).  */
	// downHourLabel= 'Minus a hour',

	/** A label for the previous month button (used by screen readers). */
	// prevMonthLabel= 'Previous month',

	/** A label for the next month button (used by screen readers). */
	// nextMonthLabel= 'Next month',

	/** A label for the previous year button (used by screen readers). */
	// prevYearLabel= 'Previous year',

	/** A label for the next year button (used by screen readers). */
	// nextYearLabel= 'Next year',

	/** A label for the previous multi-year button (used by screen readers). */
	// prevMultiYearLabel= 'Previous 21 years',

	/** A label for the next multi-year button (used by screen readers). */
	// nextMultiYearLabel= 'Next 21 years',

	/** A label for the 'switch to month view' button (used by screen readers). */
	// switchToMonthViewLabel= 'Change to month view',

	/** A label for the 'switch to year view' button (used by screen readers). */
	// switchToMultiYearViewLabel= 'Choose month and year',

	/** A label for the cancel button */
	// cancelBtnLabel= 'Cancel',

	/** A label for the set button */
	// setBtnLabel= 'Set',

	/** A label for the range 'from' in picker info */
	rangeFromLabel = 'Desde'; // from

	/** A label for the range 'to' in picker info */
	rangeToLabel = 'A' //To

	/** A label for the hour12 button (AM) */
	// hour12AMLabel= 'AM',

	/** A label for the hour12 button (PM) */
	// hour12PMLabel= 'PM',
};
@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserAnimationsModule,
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		environment.isMockEnabled ? HttpClientInMemoryWebApiModule.forRoot(FakeApiService, {
			passThruUnknownUrl: true,
			dataEncapsulation: false
		}) : [],
		NgxPermissionsModule.forRoot(),
		PartialsModule,
		CoreModule,
		OverlayModule,
		StoreModule.forRoot(reducers, { metaReducers }),
		StoreModule.forRoot({
			tasks: taskReducer
		}),
		EffectsModule.forRoot([]),
		StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
		StoreDevtoolsModule.instrument(),
		TranslateModule.forRoot(),
		MatProgressSpinnerModule,
		InlineSVGModule.forRoot(),
		MatSortModule,
		ThemeModule,

		// RouterTestingModule
	],
	exports: [],
	providers: [
		AuthService,
		LayoutConfigService,
		LayoutRefService,
		MenuConfigService,
		PageConfigService,
		KtDialogService,
		DataTableService,
		SplashScreenService,
		SharedService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptorService,
			multi: true
		},
		{
			provide: PERFECT_SCROLLBAR_CONFIG,
			useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
		},
		{
			provide: HAMMER_GESTURE_CONFIG,
			useClass: GestureConfig
		},
		{
			// layout config initializer
			provide: APP_INITIALIZER,
			useFactory: initializeLayoutConfig,
			deps: [LayoutConfigService], multi: true
		},
		{
			provide: HIGHLIGHT_OPTIONS,
			useValue: { languages: hljsLanguages }
		},
		// template services
		SubheaderService,
		MenuHorizontalService,
		MenuAsideService,
		HttpUtilsService,
		TypesUtilsService,
		LayoutUtilsService,
		{ provide: OwlDateTimeIntl, useClass: DefaultIntl }
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
