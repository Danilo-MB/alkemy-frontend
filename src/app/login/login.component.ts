import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = {};
  message: string;
  logedIn: boolean;
  token: string;

  constructor(private loginService: LoginService, private router: Router) { }

  login(user: User){
    this.loginService.login(user).subscribe(resp => {
      this.user = user;

      this.token = resp.token;

      this.message = "Bienvenido/a " + user.email;
      setTimeout( () => {
        this.router.navigate(['/home']);
      }, 3000);
      
    },

    err => {
      this.message = err.error.error;
    }

    );

  }


  ngOnInit() {
  }

}
