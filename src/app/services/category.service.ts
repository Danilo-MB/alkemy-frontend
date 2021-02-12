import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getCategories(){
    return this.http.get<Category[]>(`${this.API_URI}/categories`);
  }
  
}
