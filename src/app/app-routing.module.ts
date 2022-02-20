import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'auth',
		children: [
			{
				path: '',
				loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule),
			}
		]
	},
	{
		path: 'user',
		children: [
			{
				path: '',
				loadChildren: () => import('./views/pages/user/user.module').then(m => m.UserModule),
			}
		]
	},
	{
		path: 'task',
		children: [
			{
				path: '',
				loadChildren: () => import('./views/pages/tasks/tasks.module').then(m => m.TasksModule),
			}
		]
	},


	{ path: '', redirectTo: 'auth', pathMatch: 'full' },
	{ path: '**', redirectTo: 'auth', pathMatch: 'full' },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {
}
