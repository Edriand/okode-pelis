import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {Result} from '../../interfaces/peli-interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  @Input() pelis: Result[] = [];
  @Input() actual: number = 1;

  constructor(private router: Router) { } 
  
  route(id: number): void {
    this.router.navigateByUrl(`/peli/${id}`);
  }
}
