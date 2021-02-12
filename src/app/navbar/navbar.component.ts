import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  logedIn: boolean;
  message: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.logedIn = this.loginService.logedIn;
  }

  logOut(){
    this.loginService.logOut();
    this.message = "Adiós."
    setTimeout( () => {
      this.router.navigate(['/login']);
    }, 3000);
  }

}

