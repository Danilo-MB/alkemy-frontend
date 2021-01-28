import { OperationsService } from './../services/operations.service';
import { Component, OnInit } from '@angular/core';
import { Operation } from '../models/operation';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  
  operations: Operation[] = [];
  totalSum: number = 0;

  constructor(private operationService: OperationsService) { }

  ngOnInit() {
    this.operationService.getOperations().subscribe(operations => {
      operations.forEach(individualOperation => {
        if(individualOperation.operation_type === "In"){
          this.totalSum += individualOperation.amount;
        }else{
          this.totalSum -= individualOperation.amount;
        }
      });
      return this.totalSum;
    });
  }

}
