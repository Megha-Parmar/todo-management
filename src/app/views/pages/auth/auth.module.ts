import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth.routing.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { authReducer, AuthEffects } from 'src/app/core/auth';
import { EffectsModule } from '@ngrx/effects';
import { LoginComponent } from './login/login.component';
import { MatButtonModule, MatInputModule, MatIconModule, MatTooltipModule, MatFormFieldModule, MatCheckboxModule } from '@angular/material';
import { PartialsModule } from '../../partials/partials.module';
import { SharedModule } from 'src/app/core/common/shared.module';
import { SignupComponent } from './signup/signup.component';
import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ActivateUserComponent } from './activate-user/activate-user.component';

@NgModule({
	declarations: [
		AuthComponent,
		LoginComponent,
		SignupComponent,
		ForgotPasswordComponent,
		ResetPasswordComponent,
		ActivateUserComponent,
	],
	exports: [
		AuthComponent,
		LoginComponent,
		SignupComponent,
		ForgotPasswordComponent
	],
	imports: [
		AuthRoutingModule,
		CommonModule,
		FormsModule,
		CoreModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatInputModule,
		MatIconModule,
		MatTooltipModule,
		MatFormFieldModule,
		MatCheckboxModule,
		SharedModule,
		PartialsModule,
		NgxMatIntlTelInputModule,
		TranslateModule.forChild(),
		StoreModule.forFeature('auth', authReducer),
		EffectsModule.forFeature([AuthEffects])
	],
	providers: [  ]
})
export class AuthModule {
}