import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'app-types'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  @Input() genre!: Category;
  @Output() clickEvent = new EventEmitter<Category>();

  constructor() {}

  ngOnInit(): void { }
  
  getGenre(genre: Category) {
    this.clickEvent.emit(genre)
  }
}
