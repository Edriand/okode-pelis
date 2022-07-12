import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelis, Result } from '../interfaces/peli-interface';

@Injectable({
  providedIn: 'root'
})
export class PeliService {
  private apiUrl: string = "https://api.themoviedb.org/3";
  private apiKey: string = "70a03f52abfefb3fafeca054c00c5932";

  constructor(private http: HttpClient) { }

  descubrirPelis(page: string): Observable<Pelis> {
    const url = `${this.apiUrl}/discover/movie?page=${page}&sort_by=popularity.desc&api_key=${this.apiKey}`;
    return this.http.get<Pelis>(url)
  }

  getPeliPorId(id: string): Observable<Result> {
    const url = `${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`;
    return this.http.get<Result>(url);
  }
}
