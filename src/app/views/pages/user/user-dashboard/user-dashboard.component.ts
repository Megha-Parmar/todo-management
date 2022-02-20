import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { SubheaderService } from '../../../../../../src/app/core/_base/layout';

@Component({
  selector: 'kt-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  public showLoader$: Observable<boolean> = of(false);

  constructor(
    private subheaderService: SubheaderService,
    private translate: TranslateService,
    public changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.subheaderService.setTitle(this.translate.instant('USER.USER_DASHBOARD'));

    this.showLoader$ = of(true);
  }

  change() {
    this.changeDetectorRef.detectChanges();
  }

}
