import { Location } from '@angular/common';
export class AdminMenuConfig {
	public defaults: any = {
		header: {},
		aside: {
			self: {},
			items: [
				{
					title: "Home",
					desc: "Home",
					icon: "flaticon-home-1",
					page: "/dashboard",
				},
				{
					title: "User",
					desc: "User",
					icon: "flaticon-rotate",
					page: "/users",
					// submenu: [
						// {
						// 	title: "Users",
						// 	desc: "Users",
						// 	root: true,
						// 	page: "/users",
						// 	icon: "flaticon-users",
						// }
					// ],
				},
				]
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}