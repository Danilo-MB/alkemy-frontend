import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URI = 'http://localhost:3000';
  logedIn: boolean = false;


  constructor(private http: HttpClient) { }

  login(user: User): Observable<Token> {
    this.logedIn = true;
    return this.http.post<Token>(`${this.API_URI}/user/login`, user);
  }

  logOut(){
    //TODO: Borrar token de localStorage
    this.logedIn = false;
  }




}
