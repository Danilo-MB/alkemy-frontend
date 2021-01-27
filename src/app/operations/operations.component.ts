import { OperationsService } from './../services/operations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {

  constructor(private operationService: OperationsService) { }

  ngOnInit() {
    this.operationService.getOperations();
  }

}
