import { BaseModel } from '../../_base/crud';
import { Address } from './address.model';
import { SocialNetworks } from './social-networks.model';

export class 

User extends BaseModel {
	id: number;
	first: string;
	last: string;
	username: string;
	password: string;
	email: string;
	accessToken: string;
	refreshToken: string;
	roles: number[];
	profileImage: string;
	fullname: string;
	occupation: string;
	companyName: string;
	phone: string;
	address: Address;
	socialNetworks: SocialNetworks;

	clear(): void {
		this.id = undefined;
		this.first = '';
		this.last = '';
		this.username = '';
		this.password = '';
		this.email = '';
		this.roles = [];
		this.fullname = '';
		this.accessToken = 'access-token-' + Math.random();
		this.refreshToken = 'access-token-' + Math.random();
		this.profileImage = './assets/media/users/default.jpg';
		this.occupation = '';
		this.companyName = '';
		this.phone = '';
		this.address = new Address();
		this.address.clear();
		this.socialNetworks = new SocialNetworks();
		this.socialNetworks.clear();
	}
}
