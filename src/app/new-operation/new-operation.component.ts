import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Operation } from '../models/operation';

@Component({
  selector: 'app-new-operation',
  templateUrl: './new-operation.component.html',
  styleUrls: ['./new-operation.component.scss']
})
export class NewOperationComponent implements OnInit {
  
  API_URI = 'http://localhost/3000';

  constructor(private http: HttpClient) { }

  saveOperation(operation: Operation){
    return this.http.post(`${this.API_URI}/operations`, operation);
  }

  ngOnInit() {
  }

}
