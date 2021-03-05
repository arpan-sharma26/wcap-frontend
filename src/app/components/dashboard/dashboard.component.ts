import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../register.service';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ComponentInteractionService } from '../../component-interaction.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    public serv: RegisterService,
    private cookie: CookieService,
    private toastr: ToastrService,
    private router: Router,
    public interaction: ComponentInteractionService
  ) {}

  public userID: any;

  ngOnInit(): void {
    this.userID = this.cookie.get('userID');
    this.interaction.loggedIn();
  }

  onClickLogout() {
    this.interaction.logout();
    this.toastr.success('Succefully Logged Out.');
    this.router.navigate(['/login']);
  }
}
