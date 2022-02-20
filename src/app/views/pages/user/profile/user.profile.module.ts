import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { authReducer, AuthEffects } from 'src/app/core/auth';
import { EffectsModule } from '@ngrx/effects';
import { MatButtonModule, MatInputModule, MatIconModule, MatTooltipModule, MatFormFieldModule, MatCheckboxModule, MatAutocompleteModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule, MatSidenavModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { ProfileComponent } from './profile/profile.component';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/core/common/shared.module';
import { PortletModule } from 'src/app/views/partials/content/general/portlet/portlet.module';
import { PartialsModule } from 'src/app/views/partials/partials.module';
import { ThemeModule } from 'src/app/views/theme/theme.module';
import { PagesModule } from '../../pages.module';
import { UserProfileRoutingModule } from './user.profile.routing.module';
import { PersonalInformationComponent } from './personal-information/personal-information.component';

@NgModule({
	declarations: [
		ProfileComponent,
		PersonalInformationComponent
	],
	exports: [
		ProfileComponent,
		PersonalInformationComponent
	],
	imports: [
        UserProfileRoutingModule,
		CommonModule,
		CoreModule,
		FormsModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatButtonModule,
		MatMenuModule,
		MatInputModule,
		MatTableModule,
		MatIconModule,
		MatPaginatorModule,
		MatSortModule,
		MatProgressSpinnerModule,
		MatTooltipModule,
		PagesModule,
		ThemeModule,
		SharedModule,
		PortletModule,
		PartialsModule,
		ThemeModule,
		StoreModule.forFeature('auth', authReducer),
		EffectsModule.forFeature([AuthEffects]),
	],
	providers: [  ]
})
export class UserProfileModule {
}