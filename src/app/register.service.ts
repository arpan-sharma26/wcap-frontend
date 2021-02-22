import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  public authToken: any;
  user: any;

  constructor(private http: HttpClient, public HttpHeaders: HttpHeaders) {}

  public ROOTURL = 'http://localhost:3000';
  public signupURL = `${this.ROOTURL}/users/register`;
  public loginURL = `${this.ROOTURL}/users/authenticate`;

  signUp(userData: any) {
    return this.http.post<any>(this.signupURL, userData);
  }

  authenticateUser(user: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    alert('This is the sample message.');
    return this.http.post(this.loginURL, user);
  }
}
