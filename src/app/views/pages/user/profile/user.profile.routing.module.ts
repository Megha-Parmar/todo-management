import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';

const routes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        children: [
            {
                path: '',
                component: PersonalInformationComponent,
            }
        ]
    },
    { path: '', redirectTo: 'user', pathMatch: 'full' },
    { path: '**', redirectTo: 'user', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserProfileRoutingModule {
}
