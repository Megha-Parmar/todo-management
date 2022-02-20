import { AbstractControl } from "@angular/forms";

export class ConfirmEmailValidator {
	/**
	 * Check matching password with confirm password
	 * @param control AbstractControl
	 */
	static matchEmail(control: AbstractControl) {
		const email = control.get("contactEmail").value;

		const confirmEmail = control.get("confirmEmail").value;

		if (email !== confirmEmail) {
			control.get("confirmEmail").setErrors({ confirmEmail: true });
		} else {
			return null;
		}
		return null;
	}

	static matchCode(control: AbstractControl) {
		const email = control.get("alumniCode").value;

		const confirmEmail = control.get("alumniConfirmCode").value;

		if (email !== confirmEmail) {
			control.get("alumniConfirmCode").setErrors({ confirmEmail: true });
		} else {
			return null;
		}
		return null;
	}
}
