import { SignupService } from './../services/signup.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user = {};
  message: string;

  constructor(
    public signupService: SignupService, 
    private router: Router, 
    private route: ActivatedRoute
  ) { }

    
  saveUser(user: User){
    this.signupService.saveUser(user).subscribe(u => this.message = "Usuario registrado");
    setTimeout( () => {
      this.router.navigate(['/login']);
    }, 3000);
  }  


  ngOnInit() {
    
  }

}
