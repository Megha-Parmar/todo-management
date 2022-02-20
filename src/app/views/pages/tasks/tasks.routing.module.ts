import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from '../../theme/base/base.component';
import { TasksComponent } from './tasks/tasks.component';

// const routes: Routes = [
//     {
//         path: '',
//         component: BaseComponent,
//         // canActivate: [ AuthGuard ],
//         children: [


//             {
//                 path: '',
//                 redirectTo: '/task/tasks',
//                 pathMatch: 'full'
//             },
//             {
//                 path: 'tasks',
//                 // loadChildren: () => import('../tasks/tasks.module').then(m => m.TasksModule),
//                 component: TasksComponent
//             },


//         ]
//     },
//     { path: '', redirectTo: 'task/tasks', pathMatch: 'full' },
//     { path: '**', redirectTo: 'task/tasks', pathMatch: 'full' },
// ];
const routes: Routes = [
    {
        path: '',
        component: TasksComponent
    },
    { path: '', redirectTo: 'user/task', pathMatch: 'full' },
    { path: '**', redirectTo: 'user/task', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TasksRoutingModule {
}
