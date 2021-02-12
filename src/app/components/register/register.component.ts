import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from '../../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  Gender: any = ['Male', 'Female', 'Other'];
  Country: any = [
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

  userDetails!: FormGroup;
  data: any;

  constructor(
    private fb: FormBuilder,
    private register: RegisterService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.userDetails = this.fb.group({
      Name: '',
      Email: '',
      Mobile: '',
      Password: '',
      Dob: '',
      Gender: '',
      Country: '',
    });
  }

  registerUser() {
    this.data = this.userDetails.value;
    this.register.signUp(this.data).subscribe((res) => {
      console.log(res);
    });
  }
}
