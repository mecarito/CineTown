import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCategoryTvShows } from 'app-store';
import { TvShow } from 'app-types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tv-category',
  templateUrl: './tv-category.component.html',
  styleUrls: ['./tv-category.component.css'],
})
export class TvCategoryComponent implements OnInit {
  storeSub!: Subscription;
  tvShows!: TvShow[];
  @ViewChild('top') top!: ElementRef<HTMLDivElement>;

  constructor(public store: Store) {}

  ngOnInit(): void {
    this.storeSub = this.store
      .select(selectCategoryTvShows as any)
      .subscribe((tvShows: any) => (this.tvShows = tvShows));
    this.top.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }
}
