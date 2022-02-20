import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BaseComponent } from '../../theme/base/base.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: BaseComponent,
        // canActivate: [ AuthGuard ],
        children: [


            {
                path: '',
                redirectTo: '/user/todo',
                pathMatch: 'full'
            },
            // {
            //     path: 'users',
            //     loadChildren: () => import('../users/users.module').then(m => m.UsersModule),
            // },
            {
                path: 'todo',
                loadChildren: () => import('../tasks/tasks.module').then(m => m.TasksModule),
            },
            {
                path: 'dashboard',
                component: UserDashboardComponent
            },


        ]
    },
    { path: '', redirectTo: 'user', pathMatch: 'full' },
    { path: '**', redirectTo: 'user', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserRoutingModule {
}
