import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ActivateUserComponent } from './activate-user/activate-user.component';

const routes: Routes = [
   {
      path: '',
      component: AuthComponent,
      children: [
         {
            path: '',
            redirectTo: 'login',
         },
         {
            path: 'login',
            component: LoginComponent,
         },
         {
            path: 'signup',
            component: SignupComponent,
         },
         {
            path: 'forgot-password',
            component: ForgotPasswordComponent,
         },
         {
            path: 'reset-password',
            component: ResetPasswordComponent,
         },
         {
            path: 'user/active',
            component: ActivateUserComponent,
         }
      ]
   },
   { path: '', redirectTo: 'admin/user', pathMatch: 'full' },
   { path: '**', redirectTo: 'admin/login', pathMatch: 'full' },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class AuthRoutingModule {
}
