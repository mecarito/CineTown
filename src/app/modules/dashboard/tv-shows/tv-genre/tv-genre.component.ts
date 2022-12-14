import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { TvShow } from 'app-types'
import { ActivatedRoute } from '@angular/router';
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
  @ViewChild('top') top!: ElementRef<HTMLDivElement>;

  constructor(public route: ActivatedRoute, public tvShowService: TvShowsService) {}

  ngOnInit(): void {
    this.genreName = this.route.snapshot.paramMap.get('genre');
    this.genreId = this.route.snapshot.queryParamMap.get('id');
    if (this.genreId) {
      this.tvShowSub = this.tvShowService
        .getGenreTvShows(this.genreId)
        .subscribe((tvShows) => {
          this.tvShows = tvShows.results;
        });
    }
    this.top.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    this.tvShowSub.unsubscribe();
  }
}
