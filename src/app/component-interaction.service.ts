import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class ComponentInteractionService {
  public ROOTURL = `http://localhost:3000/users`;

  private userSource = new Subject<string>();
  userData = this.userSource.asObservable();

  constructor(private http: HttpClient, private cookies: CookieService) {}

  uploadUser(message: any) {
    this.userSource.next(message);
  }

  storeData(token: any, userData: any) {
    this.cookies.set('token', token);
    this.cookies.set('userData', JSON.stringify(userData));
  }

  logout() {
    this.cookies.deleteAll();
  }

  // getUserByID(_id: any) {
  //   return this.http.get(`${this.ROOTURL}/details/${_id}`);
  // }
}
