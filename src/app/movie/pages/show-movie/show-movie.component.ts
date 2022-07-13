import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Movie } from '../../interfaces/movie-interface';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html'
})
export class ShowMovieComponent implements OnInit {
  public movie !: Movie;

  constructor(private activatedRoute: ActivatedRoute,
              private movieService: MovieService) { }

  ngOnInit() {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.movieService.getMovieById(id))
    )
    .subscribe(movie => this.movie = movie);
  }
}
