import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../../../src/app/core/auth';
import { CommonService } from '../../../../../../src/app/views/services/common.service';

@Component({
  selector: 'kt-activate-user',
  templateUrl: './activate-user.component.html',
  styleUrls: ['./activate-user.component.scss']
})
export class ActivateUserComponent implements OnInit {

  encryptedUserId: String;
  public hasFormErrors = false;
  public errorMessage = "";
  public userId: String;
  public loading: Boolean = false;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    public cService: CommonService,
    public changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.encryptedUserId = params['id']
    });
    
    this.getUserId();
  }

  getUserId(){
    if (this.encryptedUserId !== null) {
      this.authService.getUserId(this.encryptedUserId).subscribe((data: any) => {

        if (data.statusCode == 200) {
          this.userId=data.data;
          // this.cService.showToast(data.data);

        } else {
          this.hasFormErrors = true;
          this.errorMessage = data.message;
          this.cService.showToast(this.errorMessage);
        }
        this.changeDetectorRef.detectChanges();
      }, (err: HttpErrorResponse) => {
        console.log(err);
        this.hasFormErrors = true;
        this.errorMessage = err.error.error;
      });

    } else {

    }
  }

  submit(){
    // alert("Asd");
  }
}
