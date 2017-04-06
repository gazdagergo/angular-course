import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: ['', 
        [
          Validators.required,
          Validators.minLength(5)
        ]
      ],
      password: ['', Validators.required],
    })
   }


  ngOnInit() {
  }


  signup(form){
    console.log(this.form.value);
  }

}
