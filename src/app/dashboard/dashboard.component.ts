import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movies.services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  Modules = [
    { name: 'Home', icon: 'home' },
    { name: 'Movies', icon: 'videocam' },
    { name: 'Tv Series', icon: 'live_tv' },
    { name: 'Upcomming', icon: 'calendar_month' },
  ];

  constructor(public movieService: MovieService) {}

  ngOnInit(): void {}

  getUpcomming(){
    this.movieService.getUpcommingMovies().subscribe( movies => console.log(movies))
  }
}
