import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  public authToken: any;
  user: any;

  constructor(private http: HttpClient) {}

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
