import { Component, OnInit } from '@angular/core';
import { ComponentInteractionService } from '../component-interaction.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  public user: any;

  constructor(
    private serv: ComponentInteractionService,
    private route: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.serv.getProfile().subscribe(
      (profile) => {
        console.log(profile);
        this.user = profile;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  logout() {
    this.serv.logout();
    this.toastr.success('Succefully Logged Out.');
    this.route.navigate(['/login']);
  }
}
