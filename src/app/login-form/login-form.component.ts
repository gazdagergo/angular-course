import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }

  form = new FormGroup({
    username: new FormControl('', 
      [
        Validators.required, 
        Validators.minLength(5)
      ]),
    password: new FormControl('', Validators.required)
  });

  signup(form){
    console.log(this.form.value);
  }

}
