import { OperationsService } from './../services/operations.service';
import { Component, Input, OnInit } from '@angular/core';
import { Operation } from '../models/operation';

@Component({
  selector: 'operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {
  operations: Operation[] = [];
  @Input() limit: number = 0;

  constructor(private operationService: OperationsService) { }

  ngOnInit() {
    // TODO: Posible mejora implementar paginado.
    this.operationService.getOperations().subscribe(ops => {
      if(this.limit > 0){
        this.operations = ops.slice(0, this.limit);
      }else{
        this.operations = ops;
      }
    });
  }

}
