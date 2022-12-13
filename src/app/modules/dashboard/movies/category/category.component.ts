import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCategoryMovies } from 'app-store';
import { Movie } from 'app-types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit, OnDestroy {
  storeSub!: Subscription;
  movies!: Movie[];
  @ViewChild('top') top!: ElementRef<HTMLDivElement>;

  constructor(public store: Store) {}

  ngOnInit(): void {
    this.storeSub = this.store
      .select(selectCategoryMovies as any)
      .subscribe((movies: any) => (this.movies = movies));
    this.top.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }
}
