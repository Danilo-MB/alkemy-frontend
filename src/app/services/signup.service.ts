import { HttpClient } from '@angular/common/http';
import { User } from './../models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  saveUser(user: User){
    return this.http.post(`${this.API_URI}/user`, user);
  }

  
}
