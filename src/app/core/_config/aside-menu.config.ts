export class AsideMenuConfig {
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
				
				{
					title: "Todo Management",
					desc: "Todo Management",
					icon: "flaticon2-list",
					page: "/users",

				},
			],
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}
