import { Location } from '@angular/common';
export class SubUserMenuConfig {
	
	public  defaults: any = {
		
		header: {},
		aside: {
			self: {},
			items: []
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}