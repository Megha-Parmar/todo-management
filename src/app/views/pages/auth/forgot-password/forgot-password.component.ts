import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthNoticeService, AuthService } from '../../../../../../src/app/core/auth';
import { LayoutUtilsService } from '../../../../../../src/app/core/_base/crud';
import { CommonService } from '../../../../../../src/app/views/services/common.service';

@Component({
  selector: 'kt-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;
  public hasFormErrors = false;
  public errorMessage = "";
  public loading: Boolean = false;
  public loadingSubject = new BehaviorSubject<boolean>(true);

  constructor(
    private formBuilder: FormBuilder,
    public changeDetectorRef: ChangeDetectorRef,
    private authService: AuthService,
    private router: Router,
    private layoutUtilsService: LayoutUtilsService,
    public cService: CommonService,
  ) { }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]]
    })
  }

  formErrors = {
    // id: '',
    email: '',
    
  }

  ValidationMessages = {
    email: {
      'required': 'Please enter email.',
      'email':'Please enter valid email'
    }
  }

  submit() {
    if (this.forgotPasswordForm.valid) {

      this.authService.forgotPassword(this.forgotPasswordForm.value).subscribe((data: any) => {

        if (data.statusCode == 200) {

          this.cService.showToast("Reset password link sent to the your registered mail id. !");

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
      this.cService.markFormGroupTouched(this.forgotPasswordForm);
      this.fetchAllValidations(this.forgotPasswordForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  fetchAllValidations(group: FormGroup) {
    Object.keys(group.controls).forEach((key) => {
      const abstractControl = group.get(key);
      this.formErrors[key] = '';
      if (abstractControl instanceof FormGroup) {
        this.fetchAllValidations(abstractControl);
      } else {
        if (abstractControl && abstractControl.invalid && abstractControl.touched) {
          const msg = this.ValidationMessages[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] += msg[errorKey] + ' ';
            }
          }
        }
      }
    });
    console.log(this.formErrors);
  }

}
