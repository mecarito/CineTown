import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { TvShow } from 'app-types';
import { ActivatedRoute, Router } from '@angular/router';
import { TvShowsService } from 'src/app/modules/shared/services/tvshow.service';

@Component({
  selector: 'app-tv-genre',
  templateUrl: './tv-genre.component.html',
  styleUrls: ['./tv-genre.component.css'],
})
export class TvGenreComponent implements OnInit, OnDestroy {
  tvShowSub!: Subscription;

  genreName!: string | null;
  genreId!: string | null;
  tvShows: TvShow[] = [];
  searching = true;

  constructor(
    public route: ActivatedRoute,
    public tvShowService: TvShowsService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.genreName = this.route.snapshot.paramMap.get('genre');
    this.genreId = this.route.snapshot.queryParamMap.get('id');
    if (this.genreId) {
      this.tvShowSub = this.tvShowService
        .getGenreTvShows(this.genreId)
        .subscribe((tvShows) => {
             if (tvShows) {
               this.searching = false;
             }
          this.tvShows = tvShows.results;
        });
    }
  }

  ngOnDestroy(): void {
    this.tvShowSub.unsubscribe();
  }

  goToTvShowPage(tvShow: TvShow) {
    this.router.navigate(['tvShow'], {
      queryParams: {
        id: tvShow.id,
      },
    });
  }
}
