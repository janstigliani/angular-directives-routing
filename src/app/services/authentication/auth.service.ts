import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;
  readonly BASE_URL = "https://68109d7827f2fdac2412128f.mockapi.io/";

  loginUser(userEmail: string): Promise<any> {
    const url = new URL(this.BASE_URL + 'users')
    url.searchParams.append('email', userEmail)

    return fetch(url)
      .then(res => {
        console.log(res)
        return res.json()
      })
  }

  registerUser(router: Router) {
    const url = new URL(this.BASE_URL + 'users')
    const newUser = {}

    fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newUser)
    }).then(res => {
      return res.json();
    }).then(user => {
      console.log(user);
      router.navigate(['/'])
    }).catch(error => {
      console.log(error);
    })
  }
}
