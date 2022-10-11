import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movies.services';
import { Categories } from 'src/app/types';

@Component({
  selector: 'app-dashboard-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: any

  constructor(public movieServies: MovieService) {}

  ngOnInit(): void {
    this.movieServies.getMoviesCategories().subscribe((categories) => {
      if (categories) {
       this.categories = categories
      }      
    });
  }
}
