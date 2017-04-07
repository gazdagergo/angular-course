import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UsernameValidators } from './usernameValidators';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: 
      [
        '', 
        Validators.compose([
            Validators.required, 
            UsernameValidators.cannotContainSpace,
            Validators.minLength(5)
          ]),
        Validators.composeAsync([UsernameValidators.shouldBeUnique])  
        ],
      password: ['', Validators.required]
    })
   }


  ngOnInit() {
  }


  signup(form){
    // var result = authService.login(this.form.value);
    var result = {
      invalidLogin: true
    };
    this.form.controls['username'].setErrors(result);
  }
}
