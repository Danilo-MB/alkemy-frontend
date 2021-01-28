import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Operation } from '../models/operation';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getOperations(){
    return this.http.get<Operation[]>(`${this.API_URI}/operations`);
  }

  getOperation(id: number){
    return this.http.get<Operation>(`${this.API_URI}/operations/${id}`);
  }

  updateOperation(id: number, updatedOperation: Operation){
    return this.http.put(`${this.API_URI}/operations/${id}`, updatedOperation);
  }

  saveOperation(operation: Operation){
    return this.http.post(`${this.API_URI}/operations`, operation);
  }

  deleteOperation(id: number){
    return this.http.delete(`${this.API_URI}/operations/${id}`);
  }

}
