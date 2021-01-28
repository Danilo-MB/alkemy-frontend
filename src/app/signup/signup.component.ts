import { SignupService } from './../services/signup.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: User;

  constructor(public signupService: SignupService) { }

  saveUser(){
    this.signupService.saveUser(this.user).subscribe();
  }

  ngOnInit() {
    
  }

}
