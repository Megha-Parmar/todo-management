import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { BaseComponent } from '../../theme/base/base.component';
import { AuthGuard } from 'src/app/core/auth/_guards/auth.guard';
import { authReducer, AuthEffects } from 'src/app/core/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatMenuModule, MatInputModule, MatTableModule, MatAutocompleteModule, MatRadioModule, MatFormFieldModule, MatIconModule, MatNativeDateModule, MatProgressBarModule, MatDatepickerModule, MatCardModule, MatPaginatorModule, MatSortModule, MatCheckboxModule, MatProgressSpinnerModule, MatSnackBarModule, MatExpansionModule, MatTabsModule, MatTooltipModule, MatSidenavModule, MatListModule, MatDialogModule, MatSelectModule, MatToolbarModule, MatSlideToggleModule, MatGridListModule } from '@angular/material';
import { NgbTabsetModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/core/common/shared.module';
import { MaterialPreviewModule } from '../../partials/content/general/material-preview/material-preview.module';
import { PortletModule } from '../../partials/content/general/portlet/portlet.module';
import { ThemeModule } from '../../theme/theme.module';
import { PagesModule } from '../pages.module';
const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent
      },
    ]
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];




@NgModule({


 	imports: [
    CommonModule,
    PartialsModule,
    CoreModule,
    RouterModule.forChild(routes),
		CommonModule,
		CoreModule,
		FormsModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatButtonModule,
		MatMenuModule,
		MatInputModule,
		MatTableModule,
		MatAutocompleteModule,
		MatRadioModule,
		MatFormFieldModule,
		MatIconModule,
		MatNativeDateModule,
		MatProgressBarModule,
		MatDatepickerModule,
		MatCardModule,
		MatPaginatorModule,
		MatSortModule,
		MatCheckboxModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		MatExpansionModule,
		MatTabsModule,
		NgbTabsetModule,
		MatTooltipModule,
		MatSidenavModule,
		MatListModule,
		MatDialogModule,
		MatSelectModule,
		MatToolbarModule,
		NgbModule,
		MaterialPreviewModule,
		MatSlideToggleModule,
		MatGridListModule,
		TranslateModule.forChild(),
		StoreModule.forFeature('auth', authReducer),
		EffectsModule.forFeature([AuthEffects]),
		PagesModule,
		ThemeModule,
		SharedModule,
		PortletModule,
		PartialsModule,
	],
  providers: [ AuthGuard ],
    declarations: [
    DashboardComponent,
  ]
})



export class DashboardModule { }
