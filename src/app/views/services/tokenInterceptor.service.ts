import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

    constructor(private sharedService: SharedService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let tokenizedRequest = req.clone({
            setHeaders: {
                Authorization: `Bearer ${this.sharedService.getAccessToken()}`
            }
        });
        if (!req.url.includes('/auth/')) {
            return next.handle(tokenizedRequest);
        }
        return next.handle(req);
    }

}
