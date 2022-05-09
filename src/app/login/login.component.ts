import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../utils/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private router: Router, private loginService: LoginService) {
    this.email = '';
    this.password = '';
  }

  ngOnInit() {
    if (localStorage.getItem('user')) {
      localStorage.removeItem('user');
      this.loginService
        .logout()
        .then(() => console.log('Logout sikeres'))
        .catch((err) => console.log('Logout error', err));
    }
  }

  login() {
    if (this.email != '' && this.password != '') {
      this.loginService
        .login(this.email, this.password)
        .then((res) => {
          localStorage.setItem('user', res.user!.uid);
          this.router.navigate(['/store']);
        })
        .catch((err) => console.log('Login error', err));
    }
  }
}
