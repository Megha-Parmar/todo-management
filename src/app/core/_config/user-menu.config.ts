export class UserMenuConfig {
	public defaults: any = {
		header: {},
		aside: {
			self: {},
			items: [
				// {
				// 	title: "Home",
				// 	desc: "Home",
				// 	icon: "flaticon-home-1",
				// 	page: "/dashboard",
				// },
				// {
				// 	title: "User Management",
				// 	desc: "User Management",
				// 	icon: "flaticon-user-settings",
				// 	page: "/users",

				// },
				{
					title: "Todo Management",
					desc: "Todo Management",
					icon: "flaticon-list",
					page: "/todo",

				},
			],
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}
