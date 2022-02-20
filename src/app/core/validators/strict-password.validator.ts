import { FormControl } from "@angular/forms";

export interface ValidationResult {
	[key: string]: boolean;
}

export class StrictPasswordValidator {

	public static mustHaveLowercase(control: FormControl): ValidationResult {
		let hasLower = /[a-z]/.test(control.value);

		if (!hasLower) {
			// return what´s not valid
			return { hasLower: true };
		}
		return null;
	}

	public static mustHaveUppercase(control: FormControl): ValidationResult {
		let hasUpper = /[A-Z]/.test(control.value);
		if (!hasUpper) {
			// return what´s not valid
			return { hasUpper: true };
		}
		return null;
	}

	public static mustHaveNumber(control: FormControl): ValidationResult {
		let hasNumber = /\d/.test(control.value);

		if (!hasNumber) {
			// return what´s not valid
			return { hasNumber: true };
		}
		return null;
	}

	public static mustHaveSpecialChar(control: FormControl): ValidationResult {
		let hasSpecial = /[!@#$%^&]+/.test(control.value);

		if (!hasSpecial) {
			// return what´s not valid
			return { hasSpecial: true };
		}
		return null;
	}
}
