import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UsernameValidators } from './usernameValidators';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  form: FormGroup;

  constructor(fb: FormBuilder, el: ElementRef) {
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
    });


    var keyups = Observable.fromEvent(el.nativeElement, "keyup")
      .map((e:any) => e.target.value)
      .filter(text => text.length >= 3)
      .debounceTime(400)
      .distinctUntilChanged()
      ;

   keyups.subscribe(data => console.log(data));

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
