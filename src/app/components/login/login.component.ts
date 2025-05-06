import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/authentication/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  authServ = inject(AuthService);
  router = inject(Router);

  loginForm = new FormGroup({
    email: new FormControl("", {validators: [Validators.required]}),
    password: new FormControl("", {validators: [Validators.required]})
  })

  // fakeLogin() {
  //   this.authServ.isAuth = true;
  //   this.router.navigate(['/home']);
  // }

  login() {
    this.authServ.loginUser()
  }

}
