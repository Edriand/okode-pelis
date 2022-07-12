import { Component } from '@angular/core';
import { Result } from '../../interfaces/peli-interface';
import { PeliService } from '../../services/peli.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
  termino:string = '';
  hayError: boolean = false;
  pelis: Result[] = [];
  pelisSugeridas: Result[] = [];
  mostrar: boolean = false;

  constructor(private peliService: PeliService) { }

  Buscar( s: string ): void {
    this.hayError = false;
    this.termino = s;
    this.mostrar = false;
    
    this.peliService.getPeliPorNombre(this.termino)
    .subscribe( resp => {
      this.pelis = resp.results;
    }, (err) =>  {
      this.hayError = true;
      this.pelis = [];
      console.log(err);
    });
  }

  sugerencias(t: string): void {
    this.hayError = false;
    this.termino = t;
    this.mostrar = true;

    this.peliService.getPeliPorNombre(t)
    .subscribe( pelis => this.pelisSugeridas = pelis.results.splice(0,5),
    (err) => {
      this.pelisSugeridas = []
      console.log(err);
    });
  }

  onClick(termino: string): void {
    this.Buscar( termino );
  }
}
