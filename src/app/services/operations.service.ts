import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Operation } from '../models/operation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  API_URI = 'http://localhost/3000';

  constructor(private http: HttpClient) { }

  getOperations(){
    return this.http.get(`${this.API_URI}/operations`);
  }

  updateOperation(id: string, updatedOperation: Operation): Observable<any>{
    return this.http.put(`${this.API_URI}/operations/${id}`, updatedOperation);
  }

  saveOperation(operation: Operation){
    return this.http.post(`${this.API_URI}/operations`, operation);
  }

  deleteOperation(id: string){
    return this.http.delete(`${this.API_URI}/operations/${id}`);
  }

}
