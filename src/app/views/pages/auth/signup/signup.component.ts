import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthNoticeService, AuthService } from '../../../../../../src/app/core/auth';
import { CommonService } from '../../../../../../src/app/views/services/common.service';

@Component({
	selector: 'kt-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

	public signupForm: FormGroup;
	public loading: Boolean = false;
	public regularExpression = "^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$";


	constructor(
		private authNoticeService: AuthNoticeService,
		private router: Router,
		private authService: AuthService,
		private fb: FormBuilder,
		private cService: CommonService,
	) { this.initForm() }

	ngOnInit() {
	}

	submit() {
		if (this.signupForm.valid) {
			this.authService.register(this.signupForm.value).subscribe((res) => {
				this.loading = false;
				if (res.statusCode == 200) {
					this.cService.showToast("User Registered successfully !")
					this.router.navigate(["./login"])
				} else {
					this.authNoticeService.setNotice(res.message, 'danger');
				}
			})
		} else {
			this.cService.markFormGroupTouched(this.signupForm);
			this.fetchAllValidations(this.signupForm);
		}
	}

	initForm() {
		this.signupForm = this.fb.group({
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			email: ['', [Validators.required], this.validateEmailNotTaken.bind(this)],
			username: ['', [Validators.required], this.validateUserIdNotTaken.bind(this)],
			phoneNumber: ['', [Validators.required]],
			password: ['', [Validators.required, Validators.pattern(this.regularExpression)]],
			cpassword: ['', Validators.required],
		}, { validator: mustMatch('password', 'cpassword') });
	}

	formErrors = {
		firstName: '',
		lastName: '',
		email: '',
		username: '',
		phoneNumber: '',
		password: '',
		cpassword: '',
	}

	ValidationMessages = {
		firstName: {
			'required': 'Please enter firstname.',
		},
		lastName: {
			'required': 'Please enter lastname.',
		},
		email: {
			'required': 'Please enter email.',
			'emailExist': 'Email address already exist.',
		},
		username: {
			'required': 'Please enter userId.',
			'userIdExist': 'User Id already exist.',
		},
		phoneNumber: {
			'required': 'Phonenumber is required.',
			'validatePhoneNumber': 'Phonenumber is not valid.',
		},
		password: {
			'required': 'Please enter password.',
			// 'pattern' :  'password not valid.',
			'pattern' :  'Password must contain at least one uppercase, one special character, one numeric value with minimum of 8 characters.',
			
		},
		cpassword: {
			'required': 'Please enter confirm password.',
			'mustMatch': "Your password and confirm password do not match."
		}
	}

	loadValidationError() {
		this.fetchAllValidations(this.signupForm);
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

	validateEmailNotTaken(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
			let obj = {
				username: control.value,
				email: control.value,
			}
			return this.authService.checkEmailOrUserIdAlreadyExist(obj).subscribe((res: any) => {
				if (res.statusCode == 200) {
					return resolve(null);
				} else {
					return resolve({ 'emailExist': true })
				}
			})
		});
	}

	validateUserIdNotTaken(control: AbstractControl): Promise<ValidationErrors | null> {
		return new Promise((resolve, reject) => {
			let obj = {
				username: control.value,
				email: control.value,
			}
			return this.authService.checkEmailOrUserIdAlreadyExist(obj).subscribe((res: any) => {
				if (res.statusCode == 200) {
					return resolve(null);
				} else {
					return resolve({ 'userIdExist': true })
				}
			})
		});
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