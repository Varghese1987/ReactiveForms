import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { PasswordValidators} from './shared/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userForm: FormGroup;
  countryData = {
    IN: {
      code: "IN",
      name: "India",
      states: [
        {
          code: "TN",
          name: "Tamil Nadu",
          cities: []
        },
        {
          code: "KL",
          name: "Kerala",
          cities: []
        }
      ],
    }
  };


  stateData={
    TN:{
      code:"TN",
      name:"TamilNadu",
      cities: [
        {
          code: "CH",
          name: "Chennai"
        },
        {
          code: "MD",
          name: "Madurai",
        }
      ]
    },
    KL:{
      code:"KL",
      name: "Kerala",
      cities: [
        {
          code: "COC",
          name: "Kochi",
        },
        {
          code: "PLT",
          name: "Palakad",
        }
      ]
    }
  }


  countryList;
  stateList;
  cityList;


  constructor() {
    this.userForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', Validators.required),
      password: new FormControl("", Validators.required),
      confirmPassword: new FormControl("", Validators.required),
      country: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      city: new FormControl(),
      gender: new FormControl('', Validators.required),
      married: new FormControl('', Validators.required),
      favouriteFood: new FormControl('', Validators.required),
      favouriteColr: new FormControl('', Validators.required),

    },
    // { validator: PasswordValidators}
    )
    let countryKeys = Object.keys(this.countryData);
    this.countryList = countryKeys.map((key) => this.countryData[key]);

    this.userForm.get("country").valueChanges.subscribe((data) => {
      
      this.stateList = this.countryData[data].states
      
    });

    this.userForm.get("state").valueChanges.subscribe((data)=>{
      this.cityList = this.stateData[data].cities
      console.log(this.cityList)
    });
  }



  submitDate() {
      console.log(this.userForm.value)
  }
}
