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

  signUp(userData: any) {
    return this.http.post<any>(this.signupURL, userData);
  }
}
