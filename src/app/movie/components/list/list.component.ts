import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../interfaces/movie-interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() movies: Movie[] = [];
  @Input() actual = 1;

  constructor(private router: Router) { } 
  
  route(id: number) {
    this.router.navigateByUrl(`/movie/${id}`);
  }
}
