import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UsernameValidators } from './usernameValidators';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  form: FormGroup;

  constructor(fb: FormBuilder, el: ElementRef, private http: Http) {
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
      .flatMap(serchTherm => {
        var url = "https://api.spotify.com/v1/search?type=artist&q=" + serchTherm;
        var promise = http.get(url).map(res => res.json()).toPromise();
        return Observable.fromPromise(promise);
      })
      ;

   var subscription = keyups.subscribe(data => console.log(data));
   subscription.unsubscribe();

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
