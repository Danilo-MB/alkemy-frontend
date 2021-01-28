import { OperationsService } from './../services/operations.service';
import { Component, OnInit } from '@angular/core';
import { Operation } from '../models/operation';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  operations: Operation[] = [];

  constructor(private operationService: OperationsService) { }

  ngOnInit() {
    this.operationService.getOperations().subscribe(ops => this.operations = ops);
  }

}
