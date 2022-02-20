import { Injectable } from '@angular/core';


@Injectable()
export class SharedService {

  public user: any;
  public id: any;
  public role: any;
  public access_token: any;
  public tempId: any;
  public company: any;
  public companyId: any;



  setAccessToken(access_token: any) {
    this.access_token = access_token;
    localStorage.setItem("ACCESS_TOKEN", access_token);
  }

  getAccessToken() {
    let token;
    if (this.access_token) {
      token = this.access_token;
    } else {
      token = localStorage.getItem("ACCESS_TOKEN");
    }
    return token;
  }

  setUser(user: any) {
    this.user = user;
    localStorage.setItem("USER", JSON.stringify(user));
  }

  getUser() {
    let user;
    if (this.user) {
      user = this.user;
    } else {
      user = JSON.parse(localStorage.getItem("USER"));
    }
    return user;
  }

  setRole(role: any) {
    this.role = role;
    localStorage.setItem("userRole", role);
  }

  getRole() {
    let role;
    if (this.role) {
      role = this.id;
    } else {
      role = localStorage.getItem("userRole");
    }
    return role;
  }


  setSubUserPermissions(permissions: any) {
    localStorage.setItem("permissions", permissions);
  }
  getSubUserPermissions() {
    return JSON.parse(localStorage.getItem("permissions"));
  }
}
