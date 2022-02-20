import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../../../src/app/core/auth';
import { LayoutUtilsService } from '../../../../../../src/app/core/_base/crud';
import { CommonService } from '../../../../../../src/app/views/services/common.service';


@Component({
  selector: 'kt-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  public encryptEmailId: String;
  public resetPasswordForm: FormGroup;
  public hasFormErrors = false;
  public errorMessage = "";
  public email: String;
  public loading: Boolean = false;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public changeDetectorRef: ChangeDetectorRef,
    private authService: AuthService,
    private router: Router,
    private layoutUtilsService: LayoutUtilsService,
    public cService: CommonService,

  ) { this.initForm(); }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.encryptEmailId = params['id']
    });

    this.getEmail();
    
  }

  initForm() {
    this.resetPasswordForm = this.formBuilder.group({
      password: ['',Validators.required],
      cnfPassword: ['',Validators.required]
    }, { validator: mustMatch('password', 'cnfPassword') });
  }

  formErrors = {
    password: '',
    cnfPassword:''
  }

  ValidationMessages = {
    password: {
      'required': 'Please enter password.',
    },
    cnfPassword: {
			'required': 'Please enter confirm password.',
			'mustMatch': "Your password and confirm password do not match."
		}
  }

  getEmail() {
    if (this.encryptEmailId !== null) {
      this.authService.resetPassword(this.encryptEmailId).subscribe((data: any) => {

        // console.log("Data ", data);
        if (data.statusCode == 200) {
          this.email=data.data;
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

  submit() {
    if (this.resetPasswordForm.valid) {
      let userData = {
        email:this.email,
        password:this.resetPasswordForm.get('password').value
      }
      this.authService.resetUserPassword(userData).subscribe((data: any) => {

        if (data.statusCode == 200) {

          this.cService.showToast("Password reset successfully.!!");          
          this.router.navigate(["/auth/login"]);

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
      this.cService.markFormGroupTouched(this.resetPasswordForm);
      this.fetchAllValidations(this.resetPasswordForm);
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
function mustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}
