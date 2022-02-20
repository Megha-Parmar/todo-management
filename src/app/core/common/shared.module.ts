// Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PartialsModule } from "../../../../src/app/views/partials/partials.module";
import { CoreModule } from "../core.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbTabsetModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {
	MatButtonModule,
	MatMenuModule,
	MatSelectModule,
	MatInputModule,
	MatTableModule,
	MatAutocompleteModule,
	MatRadioModule,
	MatIconModule,
	MatNativeDateModule,
	MatProgressBarModule,
	MatDatepickerModule,
	MatCardModule,
	MatSortModule,
	MatPaginatorModule,
	MatCheckboxModule,
	MatProgressSpinnerModule,
	MatSnackBarModule,
	MatExpansionModule,
	MatTabsModule,
	MatTooltipModule,
	MatSidenavModule,
	MatListModule,
	MatDialogModule,
	MatSlideToggleModule,
	MatGridListModule,
	MatToolbarModule,
	MatChipsModule,
} from "@angular/material";
import { PagesModule } from "../../../../src/app/views/pages/pages.module";
import { ThemeModule } from "../../../../src/app/views/theme/theme.module";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";
import { MaterialPreviewModule } from "../../../../src/app/views/partials/content/general/material-preview/material-preview.module";
import { SharedService } from "../../../../src/app/views/services/shared.service";
import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AuthNoticeComponent } from '../../../../src/app/views/pages/auth/auth-notice/auth-notice.component';

@NgModule({
	declarations: [
		AuthNoticeComponent,
	],
	exports: [
		AuthNoticeComponent,
	],
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		FormsModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatMenuModule,
		MatSelectModule,
		MatInputModule,
		MatTableModule,
		MatAutocompleteModule,
		MatRadioModule,
		MatIconModule,
		MatToolbarModule,
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
		MaterialPreviewModule,
		NgbModule,
		MatTooltipModule,
		MatSidenavModule,
		MatListModule,
		MatDialogModule,
		MatSlideToggleModule,
		MatGridListModule,
		MatChipsModule,
		PagesModule,
		ThemeModule,
		OwlDateTimeModule,
		OwlNativeDateTimeModule,
		NgxMatIntlTelInputModule,
		DateRangePickerModule,
	],
	providers: [SharedService],
	entryComponents: []
})
export class SharedModule { }
