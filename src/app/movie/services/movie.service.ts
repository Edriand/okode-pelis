import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movies, Movie } from '../interfaces/movie-interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) { }

  discoverMovies(page: string) {
    return this.http.get<Movies>(`${environment.apiUrl}/discover/movie?page=${page}&sort_by=popularity.desc&api_key=${environment.apiKey}`);
  }

  getMovieById(id: string) {
    return this.http.get<Movie>(`${environment.apiUrl}/movie/${id}?api_key=${environment.apiKey}`);
  }

  getMovieByName(name: string) {
    return this.http.get<Movies>(`${environment.apiUrl}/search/movie?query=${name}&api_key=${environment.apiKey}`);
  }
}
