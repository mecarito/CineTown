import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TvShow } from 'app-types';
import { TvShowsService } from '../../shared/services/tvshow.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css'],
})
export class TvShowsComponent implements OnInit, OnDestroy {
  popularTvShowsSub!: Subscription;
  topRatedTvShowsSub!: Subscription;
  nowPlayingTvShowsSub!: Subscription;

  popularTvShows: TvShow[] = [];
  topRatedTvShows: TvShow[] = [];
  nowPlayingTvShows: TvShow[] = [];

  constructor(public tvShowService: TvShowsService) {}

  ngOnInit(): void {
    this.popularTvShowsSub = this.tvShowService.$popular.subscribe((res) => {
      this.popularTvShows = res.results.filter((tvshow) => tvshow.poster_path);
    });
    this.topRatedTvShowsSub = this.tvShowService.$topRated.subscribe((res) => {
      this.topRatedTvShows = res.results.filter((tvshow) => tvshow.poster_path);
    });
    this.nowPlayingTvShowsSub = this.tvShowService.$nowPlaying.subscribe(
      (res) => {
        this.nowPlayingTvShows = res.results.filter(
          (tvshow) => tvshow.poster_path
        );
      }
    );
  }

  ngOnDestroy(): void {
    this.popularTvShowsSub.unsubscribe();
    this.topRatedTvShowsSub.unsubscribe();
    this.nowPlayingTvShowsSub.unsubscribe();
  }
}
