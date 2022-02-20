import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { authReducer, AuthEffects, AuthGuard } from 'src/app/core/auth';
import { EffectsModule } from '@ngrx/effects';
import { ThemeModule } from '../../theme/theme.module';
import { UserRoutingModule } from './user.routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

@NgModule({
	declarations: [
		UserDashboardComponent,
	],
	exports: [
		UserDashboardComponent,
	],
	imports: [
		UserRoutingModule,
		ThemeModule,
		TranslateModule.forChild(),
		StoreModule.forFeature('auth', authReducer),
		EffectsModule.forFeature([AuthEffects]),
	],
	// providers: [ AuthGuard ]
})
export class UserModule {
}