import { Component } from '@angular/core';
import { Movie } from '../../interfaces/movie-interface';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent {
  movies: Movie[] = [];
  actual  = 0;
  last    = 1;
  pages   = false;

  constructor(private movieService: MovieService) {
    this.pageOne();
  }
 
  pageOne() {
    this.movieService.discoverMovies('1')
      .subscribe(movies => {
        this.movies = movies.results;
        this.actual = movies.page;
        this.last = movies.total_pages;
        if(this.last > 500) this.last = 500;
        if(this.last > 1) this.pages = true;
      });
  }

  pageRight() {
    if (this.actual === this.last) this.actual = 0;

    this.movieService.discoverMovies(`${this.actual+1}`)
      .subscribe(movies => {
        this.movies = movies.results;
        this.actual = movies.page;
      });
  }

  pageLeft() {
    if (this.actual === 1) this.actual = 501;

    this.movieService.discoverMovies(`${this.actual-1}`)
      .subscribe(movies => {
        this.movies = movies.results;
        this.actual = movies.page;
      });
  }

  pageSearch(page: any) {
    let nPage = page.target.value;  
    
    if(nPage > 0 && nPage <= this.last)
    {
      this.movieService.discoverMovies(`${nPage}`)
      .subscribe(movies => {
        this.movies = movies.results;
        this.actual = movies.page;
      }); 
    }
    else
      this.pageOne();
  }}
