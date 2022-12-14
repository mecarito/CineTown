import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvShow } from 'app-types';
import { Subscription } from 'rxjs';
import { TvShowsService } from 'src/app/modules/shared/services/tvshow.service';

@Component({
  selector: 'app-tvshow-details',
  templateUrl: './tvshow-details.component.html',
  styleUrls: ['./tvshow-details.component.css'],
})
export class TvshowDetailsComponent implements OnInit {
  tvShowSub!: Subscription;

  tvShowId!: string | null;
  tvShow!: TvShow;
  searching = true;
  @ViewChild('top') top!: ElementRef<HTMLDivElement>;

  constructor(
    public route: ActivatedRoute,
    public tvShowService: TvShowsService
  ) {}

  ngOnInit(): void {
    this.tvShowId = this.route.snapshot.queryParamMap.get('id');
    if (this.tvShowId) {
      this.tvShowSub = this.tvShowService
        .getTvShow(this.tvShowId)
        .subscribe((tvShow) => {
          if (tvShow) {
            this.searching = false
          }
          this.tvShow = tvShow;
        });
    }
    this.top.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    this.tvShowSub.unsubscribe();
  }
}
