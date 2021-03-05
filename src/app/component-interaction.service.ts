import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  JsonpClientBackend,
} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class ComponentInteractionService {
  public ROOTURL = `http://localhost:3000/users`;
  public authToken: any;

  private userSource = new Subject<string>();
  userData = this.userSource.asObservable();

  constructor(private http: HttpClient, private cookies: CookieService) {}

  uploadUser(message: any) {
    this.userSource.next(message);
  }

  storeData(token: any, userData: any) {
    this.cookies.set('token', token);
    this.cookies.set('userData', JSON.stringify(userData));
    this.authToken = token;
  }

  logout() {
    this.cookies.deleteAll();
  }

  loggedIn() {
    let token = this.cookies.get('token');
    this.authToken = token;
    const helper = new JwtHelperService();
    return helper.isTokenExpired(this.authToken);
  }

  getProfile() {
    this.authToken = this.cookies.get('token');
    console.log(this.authToken);
    const opts = {
      headers: new HttpHeaders({
        Authorization: this.authToken,
      }),
    };
    return this.http.get(`http://localhost:3000/users/profile`, opts);
  }
}
