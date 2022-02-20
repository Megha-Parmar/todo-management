import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { TasksRoutingModule } from './tasks.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatMenuModule, MatInputModule, MatTableModule, MatIconModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatTooltipModule, MatSelectModule, MatFormFieldModule, MatDatepickerModule, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { NgxMaskModule } from 'ngx-mask';
import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';
import { authReducer, AuthEffects } from 'src/app/core/auth';
import { SharedModule } from 'src/app/core/common/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { DD_MM_YYYY_Format } from 'src/app/_model/userDummyData.model';
import { PortletModule } from '../../partials/content/general/portlet/portlet.module';
import { PartialsModule } from '../../partials/partials.module';
import { ThemeModule } from '../../theme/theme.module';
import { PagesModule } from '../pages.module';
import { TrimTextDirective } from 'src/app/core/_base/layout/directives/trim-text.directive';



@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    TasksRoutingModule,
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
    MatSelectModule,
    PagesModule,
    SharedModule,
    PortletModule,
    NgbModule,
    PartialsModule,
    MatFormFieldModule,
    NgxMatIntlTelInputModule,
    MatSortModule,
    ThemeModule,
    StoreModule.forFeature('auth', authReducer),
    TranslateModule.forChild(),
    EffectsModule.forFeature([AuthEffects]),
    NgxMaskModule.forRoot(),
    NgSelectModule,
    MatDatepickerModule,
    // TrimTextDirective
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: MAT_DATE_FORMATS, useValue: DD_MM_YYYY_Format },
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' }
  ]

})
export class TasksModule { }
