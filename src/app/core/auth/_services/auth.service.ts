import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { User } from "../_models/user.model";
import { Permission } from "../_models/permission.model";
import { Role } from "../_models/role.model";
import { catchError, map } from "rxjs/operators";
import { QueryParamsModel, QueryResultsModel } from "../../_base/crud";
import { environment } from "../../../../environments/environment";

const API_USERS_URL = "api/users";
const API_ROLES_URL = "api/roles";

@Injectable()
export class AuthService {

	private url = `${environment.BASE_URL}auth/`;
	private mainUrl = `${environment.BASE_URL}`;

	private header = new HttpHeaders({
		'Content-Type': 'application/json',
		'No-Auth': 'True'
	});

	constructor(private http: HttpClient) { }

	login(loginData: any): Observable<any> {
		return this.http.post<any>(this.url + 'login', loginData, { headers: this.header });
	}

	checkEmailAlreadyExist(email: any) {
		return this.http.get<any>(this.url + 'checkEmail?email=' + email, { headers: this.header });
	}

	checkEmailOrUserIdAlreadyExist(obj: {}) {
		return this.http.post<any>(this.url + 'checkEmail', obj, { headers: this.header });
	}

	register(user: any): Observable<any> {
		return this.http.post<any>(this.url + 'user/register', user, { headers: this.header });
	}

	createorUpdateUser(user: any): Observable<any> {
		return this.http.post<any>(this.mainUrl + 'user/create/sub/user', user, { headers: this.header });
	}

	getUserByToken(): Observable<User> {
		const userToken = localStorage.getItem(environment.authTokenKey);
		const httpHeaders = new HttpHeaders();
		httpHeaders.set("Authorization", "Bearer " + userToken);
		return this.http.get<User>(API_USERS_URL, { headers: httpHeaders });
	}

	/*
	 * Submit forgot password request
	 *
	 * @param {string} email
	 * @returns {Observable<any>}
	 */
	public requestPassword(email: string): Observable<any> {
		return this.http
			.get(API_USERS_URL + "/forgot?=" + email)
			.pipe(catchError(this.handleError("forgot-password", [])));
	}

	getAllUsers(): Observable<User[]> {
		return this.http.get<User[]>(API_USERS_URL);
	}

	getUserById(userId: number): Observable<User> {
		return this.http.get<User>(API_USERS_URL + `/${userId}`);
	}

	// DELETE => delete the user from the server
	deleteUser(userId: number) {
		const url = `${API_USERS_URL}/${userId}`;
		return this.http.delete(url);
	}

	// UPDATE => PUT: update the user on the server
	updateUser(_user: User): Observable<any> {
		const httpHeaders = new HttpHeaders();
		httpHeaders.set("Content-Type", "application/json");
		return this.http.put(API_USERS_URL, _user, { headers: httpHeaders });
	}

	// CREATE =>  POST: add a new user to the server
	createUser(user: User): Observable<User> {
		const httpHeaders = new HttpHeaders();
		httpHeaders.set("Content-Type", "application/json");
		return this.http.post<User>(API_USERS_URL, user, {
			headers: httpHeaders,
		});
	}

	// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
	// items => filtered/sorted result
	findUsers(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
		const httpHeaders = new HttpHeaders();
		httpHeaders.set("Content-Type", "application/json");
		return this.http.post<QueryResultsModel>(
			API_USERS_URL + "/findUsers",
			queryParams,
			{ headers: httpHeaders }
		);
	}

	// Permission
	getAllPermissions(): Observable<Permission[]> {
		return of([] as Permission[]);
		// return this.http.get<Permission[]>(API_PERMISSION_URL);
	}

	getRolePermissions(roleId: number): Observable<Permission[]> {
		return of([] as Permission[]);
		// return this.http.get<Permission[]>(
		// 	API_PERMISSION_URL + "/getRolePermission?=" + roleId
		// );
	}

	// Roles
	getAllRoles(): Observable<Role[]> {
		return of([] as Role[]);
		// return this.http.get<Role[]>(API_ROLES_URL);
	}

	getRoleById(roleId: number): Observable<Role> {
		return of({} as Role);
		// return this.http.get<Role>(API_ROLES_URL + `/${roleId}`);
	}

	// CREATE =>  POST: add a new role to the server
	createRole(role: Role): Observable<Role> {
		// Note: Add headers if needed (tokens/bearer)
		const httpHeaders = new HttpHeaders();
		httpHeaders.set("Content-Type", "application/json");
		return this.http.post<Role>(API_ROLES_URL, role, {
			headers: httpHeaders,
		});
	}

	// UPDATE => PUT: update the role on the server
	updateRole(role: Role): Observable<any> {
		const httpHeaders = new HttpHeaders();
		httpHeaders.set("Content-Type", "application/json");
		return this.http.put(API_ROLES_URL, role, { headers: httpHeaders });
	}

	// DELETE => delete the role from the server
	deleteRole(roleId: number): Observable<Role> {
		const url = `${API_ROLES_URL}/${roleId}`;
		return this.http.delete<Role>(url);
	}

	// Check Role Before deletion
	isRoleAssignedToUsers(roleId: number): Observable<boolean> {
		return of(false as boolean);
		// return this.http.get<boolean>(
		// 	API_ROLES_URL + "/checkIsRollAssignedToUser?roleId=" + roleId
		// );
	}

	findRoles(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
		// This code imitates server calls
		return of({} as QueryResultsModel);
		// const httpHeaders = new HttpHeaders();
		// httpHeaders.set("Content-Type", "application/json");
		// return this.http.post<QueryResultsModel>(
		// 	API_ROLES_URL + "/findRoles",
		// 	queryParams,
		// 	{ headers: httpHeaders }
		// );
	}

	public get token(): string {
		return localStorage.getItem("token");
	}

	public get currentUserValue(): any {
		return JSON.parse(localStorage.getItem("user"));
	}

	/*
	 * Handle Http operation that failed.
	 * Let the app continue.
	 *
	 * @param operation - name of the operation that failed
	 * @param result - optional value to return as the observable result
	 */
	private handleError<T>(operation = "operation", result?: any) {
		return (error: any): Observable<any> => {
			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead

			// Let the app keep running by returning an empty result.
			return of(result);
		};
	}

	forgotPassword(userData: any) {
		return this.http.post<any>(this.url + 'forgotpassword', userData, { headers: this.header });
	}

	resetPassword(id: any) {
		return this.http.get<any>(this.url + 'resetpassword?id=' + id, { headers: this.header });
	}

	resetUserPassword(userData: any) {
		return this.http.post<any>(this.url + 'resetpassword', userData, { headers: this.header });
	}

	getUserId(id: any) {
		return this.http.get<any>(this.url + 'get/user?id=' + id, { headers: this.header });
	}
}
