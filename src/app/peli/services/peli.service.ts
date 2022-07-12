import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pelis, Result } from '../interfaces/peli-interface';

@Injectable({
  providedIn: 'root'
})
export class PeliService {

  constructor(private http: HttpClient) { }

  descubrirPelis(page: string) {
    return this.http.get<Pelis>(`${environment.apiUrl}/discover/movie?page=${page}&sort_by=popularity.desc&api_key=${environment.apiKey}`);
  }

  getPeliPorId(id: string) {
    return this.http.get<Result>(`${environment.apiUrl}/movie/${id}?api_key=${environment.apiKey}`);
  }

  getPeliPorNombre(name: string) {
    return this.http.get<Pelis>(`${environment.apiUrl}/search/movie?query=${name}&api_key=${environment.apiKey}`);
  }
}
