import { OperationsService } from './../services/operations.service';
import { Component, OnInit } from '@angular/core';
import { Operation } from '../models/operation';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private operationsService: OperationsService, 
    private router: Router,
    private route: ActivatedRoute) {

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if(this.id){
      this.operationsService.getOperation(this.id).subscribe(op => this.operation = op);
    }

  }

  saveOperation(operation: Operation){
    if(this.id){
      operation.id = this.id;
      this.operationsService.updateOperation(operation.id, operation).subscribe(o => this.message = "Operation Updated");
      setTimeout( () => {
        this.router.navigate(['/home']);
      }, 3000);
    }else{
      this.operationsService.saveOperation(operation).subscribe(o => this.message = "Operation Created");
      setTimeout( () => {
        this.router.navigate(['/home']);
      }, 3000);
    }
  }

  deleteOperation(){
    this.operationsService.deleteOperation(this.id).subscribe(o => this.message = "Operation Deleted"); 
    setTimeout( () => {
      this.router.navigate(['/home']);
    }, 3000);
  }

  ngOnInit() {
  }

}
