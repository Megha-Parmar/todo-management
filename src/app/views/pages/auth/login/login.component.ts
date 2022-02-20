import { CommonService } from 'src/app/views/services/common.service';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';
import { AuthNoticeService, AuthService, Login } from '../../../../core/auth';
import { AppState } from '../../../../core/reducers';
import { HttpErrorResponse } from '@angular/common/http';
import { SharedService } from 'src/app/views/services/shared.service';

import { currentUser } from 'src/app/_model/userDummyData.model';
@Component({
	selector: 'kt-login',
	templateUrl: './login.component.html',
	encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, OnDestroy {

	loginForm: FormGroup;
	loading = false;
	isLoggedIn$: Observable<boolean>;
	errors: any = [];
	private unsubscribe: Subject<any>;


	constructor(
		private router: Router,
		private authService: AuthService,
		private authNoticeService: AuthNoticeService,
		private cService:CommonService,
		private sharedService: SharedService,
		private fb: FormBuilder,
		private cdr: ChangeDetectorRef,
		private store: Store<AppState>,
	
	) { this.unsubscribe = new Subject(); }

	ngOnInit(): void {
		this.initForm();
	}

	onSubmit() {
		if (this.loginForm.valid) {
			const currentUserData=currentUser;

			this.sharedService.setAccessToken(currentUserData.accessToken);
					this.sharedService.setUser(currentUserData);
					this.sharedService.setRole(currentUserData.role);
					this.router.navigate(["/" + currentUserData.role]);
			
		} else {
			this.cService.markFormGroupTouched(this.loginForm);
		
		}
	}

	ngOnDestroy(): void {
		this.authNoticeService.setNotice(null);
		this.unsubscribe.next();
		this.unsubscribe.complete();
		this.loading = false;
	}

	initForm() {
		this.loginForm = this.fb.group({
			email: ['megha@gmail.com',Validators.compose([
				Validators.required,
				Validators.pattern(
				  "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
				),
			  ])],
			password: ['Test@123', [Validators.required]],
		});
	}
}
