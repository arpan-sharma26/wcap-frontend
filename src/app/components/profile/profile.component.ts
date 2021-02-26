import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../register.service';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    public serv: RegisterService,
    private cookie: CookieService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  public userID: any;

  ngOnInit(): void {
    this.userID = this.cookie.get('userID');
  }

  onClickLogout() {
    this.toastr.success('Succefully Logged Out.');
    this.router.navigate(['/login']);
  }
}
