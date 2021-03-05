import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public blockSubmit: any;
  public Gender: any = ['Male', 'Female', 'Other'];
  public Country: any = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Austrian Empire',
    'Azerbaijan',
    'Baden',
    'Bahamas',
    'The Bahrain',
    'Bangladesh',
    'Barbados',
    'Bavaria',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin(Dahomey)',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Brunswick and Lüneburg',
    'Bulgaria',
    'Burkina Faso (Upper Volta)',
    'Burma',
    'Burundi',
  ];

  public userDetails!: FormGroup;
  public data: any;

  constructor(
    private fb: FormBuilder,
    private register: RegisterService,
    private toast: ToastrService,
    private router: Router
  ) {
    this.formFunction();
  }

  ngOnInit() {}

  formFunction() {
    this.userDetails = this.fb.group({
      Name: ['', Validators.required],
      Email: ['', Validators.required && Validators.email],
      Mobile: ['', Validators.required],
      Password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      Dob: ['', Validators.required],
      Gender: ['', Validators.required],
      Country: ['', Validators.required],
    });
  }

  checkCondition() {
    if (
      this.userDetails.value.Password !== this.userDetails.value.confirmPassword
    ) {
      this.blockSubmit = false;
    }
  }

  registerUser() {
    this.data = this.userDetails.value;
    this.register.signUp(this.data).subscribe((res) => {
      console.log(res);
    });
    this.toast.success('You are successfully registered.');
    this.router.navigate(['/login']);
  }
}
