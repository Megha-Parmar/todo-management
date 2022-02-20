import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, TemplateRef } from "@angular/core";
import { environment } from "../../../../src/environments/environment";
import { MatSnackBar } from "@angular/material";
import { FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from './shared.service';

@Injectable({
	providedIn: "root",
})
export class CommonService {

	constructor(
		private http: HttpClient,
		public snackBar: MatSnackBar,
		private router: Router,
		private location: Location,
		private sharedService: SharedService) { }

	private url = `${environment.BASE_URL}/v1`;

	showToast(message: string) {
		this.snackBar.open(message, "CLOSE", {
			duration: 2000,
		});
	}

	markFormGroupTouched(formGroup: FormGroup) {
		(<any>Object).values(formGroup.controls).forEach((control) => {
			control.markAsTouched();
			if (control.controls) {
				this.markFormGroupTouched(control);
			}
		});
	}

	getDate(): any {
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth() + 1;
		var yyyy = today.getFullYear();
		return (mm < 10 ? '0' + mm : mm) + '/' + (dd < 10 ? '0' + dd : dd) + '/' + yyyy;
	}

	getNgbDate(): any {
		var today = new Date();
		let obj = {
			year: + today.getFullYear(),
			month: + today.getMonth() + 1,
			day: + today.getDate(),
		}
		return obj;
	}

	logout() {
		localStorage.clear();
	}

	getMMDDYYYY(obj: any) {
		return obj.month + '/' + obj.day + '/' + obj.year;
	}

	getMMDDYYYYHHMMAA(value: any) {
		var dt = new Date(value);
		let date = `${dt.getDate().toString().padStart(2, '0')}/${(dt.getMonth() + 1).toString().padStart(2, '0')}/${dt.getFullYear().toString().padStart(4, '0')} ${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}:${dt.getSeconds().toString().padStart(2, '0')}`
		console.log("DATE : " + date);
		return date;
	}

	getFormattedDate(date: any): any {
		let obj = null;
		if (date) {
			var res = date.split("/");
			obj = {
				year: + res[2],
				month: + res[0],
				day: + res[1],
			}
		}
		return obj;
	}

	getFormattedDateOfJava(date: any): any {
		let actualDate = new Date(date);
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth() + 1;
		var yyyy = today.getFullYear();
		let dateTemp = (mm < 10 ? '0' + mm : mm) + '/' + (dd < 10 ? '0' + dd : dd) + '/' + yyyy;
		var res = dateTemp.split("/");
		let obj = {
			year: + res[2],
			month: + res[0],
			day: + res[1],
		}
		return obj;
	}

	isUser() {
		let role = this.sharedService.getRole();
		if (role == "user") {
			return true;
		}
		return false;
	}

	isSuperAccountant() {
		let role = this.sharedService.getRole();
		if (role == "saccount") {
			return true;
		}
		return false;
	}

	back() {
		this.location.back();
	}

}
