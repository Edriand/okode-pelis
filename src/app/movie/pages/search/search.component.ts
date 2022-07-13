import { Component } from '@angular/core';
import { Movie } from '../../interfaces/movie-interface';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  movies         : Movie[] = [];
  moviesSuggested: Movie[] = [];
  term   = '';
  error  = false;
  show   = false;
  
  constructor(private movieService: MovieService) { }

  search(s: string) {
    this.error = false;
    this.term = s;
    this.show = false;
    
    this.movieService.getMovieByName(this.term)
    .subscribe(resp => {
      this.movies = resp.results;
    }, (err) =>  {
      this.error = true;
      this.movies = [];
      console.log(err);
    });
  }

  suggestions(t: string) {
    this.error = false;
    this.term = t;
    this.show = true;

    this.movieService.getMovieByName(t)
    .subscribe(movies => this.moviesSuggested = movies.results.splice(0,5),
    (err) => {
      this.moviesSuggested = []
      this.error = true;
      console.log(err);
    });
  }

  onClick(termino: string) {
    this.search(termino);
  }
}
