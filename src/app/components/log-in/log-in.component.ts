import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../register.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { ComponentInteractionService } from '../../component-interaction.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private serv: RegisterService,
    private route: Router,
    private cookie: CookieService,
    private toast: ToastrService,
    private interaction: ComponentInteractionService
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      mobile: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public userProfile: any;

  onLoginSubmit() {
    console.log(this.loginForm.value);
    this.serv.authenticateUser(this.loginForm.value).subscribe((res) => {
      this.userProfile = res;
      if (this.userProfile.message === 'User not found') {
        this.toast.error('Not valid credentials, Please register');
        this.route.navigate(['/register']);
      } else {
        this.interaction.storeData(this.userProfile.token, this.userProfile);
        console.log(this.userProfile);
        this.route.navigate(['/dashboard']);
      }
    });
  }

  ngOnInit(): void {}
}
