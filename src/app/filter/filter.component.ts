import { Category } from './../models/category';
import { CategoryService } from './../services/category.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  
  @Input('category') category;
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }


  ngOnInit() {
    this.categoryService.getCategories().subscribe(c => this.categories = c);
  }

}
