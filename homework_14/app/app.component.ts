import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  singupform:FormGroup;
  loginform:FormGroup;
  constructor(private formBuilder:FormBuilder, private userService:UserService) { 
    this.singupform = this.formBuilder.group({
      'fname': ['', Validators.required],
      'lname': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.compose([Validators.required])],
      'confirmPassword': ['', Validators.required],
      'policy': ['', Validators.requiredTrue] 
    });

    this.loginform = this.formBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'remember': ['']
    });
  }
  onSignupSubmit() {
    console.log(this.singupform);
  }
  onLoginSubmit() {
    this.userService.login(this.loginform.get('email').value, this.loginform.get('password').value);
  }

  onProtectedBtn() {
    console.log("here");
    this.userService.verify();
  }
}
