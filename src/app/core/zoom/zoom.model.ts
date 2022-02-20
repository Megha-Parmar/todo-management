export class Zoom {
    meetingNumber: string;
	role: string;
	signature: string;
    userName: string;
    userEmail: string;
    password: string;
    clear() {
        this.meetingNumber = '';
        this.role = '';
        this.signature = '';
        this.userName = '';
        this.userEmail = '';
        this.password = '';
    }
}
