import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  tvShows: TvShow[] = [];

  constructor(public store: Store, public router: Router) {}

  ngOnInit(): void {
    this.storeSub = this.store
      .select(selectCategoryTvShows as any)
      .subscribe((tvShows: any) => (this.tvShows = tvShows));
  }

  ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }

  goToTvShowPage(tvShow: TvShow) {
    this.router.navigate(['tvShow'], {
      queryParams: {
        id: tvShow.id,
      },
    });
  }
}
