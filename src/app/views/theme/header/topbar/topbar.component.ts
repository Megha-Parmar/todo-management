// Angular
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'kt-topbar',
	templateUrl: './topbar.component.html',
	styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
	public providerId;
	public msg;
	constructor() { }
	ngOnInit(): void {
		this.providerId = localStorage.getItem("role");
		if (this.providerId === 'Provider') {
			if (JSON.parse(localStorage.getItem('user')).status === 1) {
				this.msg = 'Subscribed';
			}
		} else {
			this.msg = ' ';
		}
	}

}
