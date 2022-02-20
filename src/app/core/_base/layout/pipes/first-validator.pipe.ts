import { Pipe } from "@angular/core";

@Pipe({
	name: "firstValidator",
})
export class FirstValidatorPipe {
	transform(obj) {
		if (obj) {
			var keys = Object.keys(obj);
			if (keys && keys.length > 0) {
				return keys[0];
			}
		}
		return null;
	}
}
