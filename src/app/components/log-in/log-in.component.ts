import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../register.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private serv: RegisterService) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLoginSubmit() {
    console.log(this.loginForm.value);
    this.serv.authenticateUser(this.loginForm.value);
  }

  ngOnInit(): void {}
}
