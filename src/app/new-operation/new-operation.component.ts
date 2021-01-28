import { OperationsService } from './../services/operations.service';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Operation } from '../models/operation';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-operation',
  templateUrl: './new-operation.component.html',
  styleUrls: ['./new-operation.component.scss']
})
export class NewOperationComponent implements OnInit {
  message: string;
  id: number;
  operation: Operation = {};
  
  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient, private operationsService: OperationsService, private route: ActivatedRoute) {

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if(this.id){
      this.operationsService.getOperation(this.id).subscribe(op => this.operation = op);
    }

  }

  saveOperation(operation){
    if(this.id){
      operation.id = this.id;
      this.operationsService.updateOperation(operation.id, operation).subscribe(o => this.message = "Operation updated");
    }else{
      this.operationsService.saveOperation(operation).subscribe(o => this.message = "Operation created");
    }
  }

  ngOnInit() {
  }

}
