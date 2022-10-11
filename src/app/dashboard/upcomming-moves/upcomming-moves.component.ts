import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movies.services';

@Component({
  selector: 'app-upcomming-moves',
  templateUrl: './upcomming-moves.component.html',
  styleUrls: ['./upcomming-moves.component.css']
})
export class UpcommingMovesComponent implements OnInit {
  upCommingMoves: any

  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getUpcommingMovies().subscribe((movies) => {
      if (movies) {
       this.upCommingMoves = movies
      }      
    });
  }

}
