import { Component } from '@angular/core';
import { Result } from '../../interfaces/peli-interface';
import { PeliService } from '../../services/peli.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
  pelis         : Result[] = [];
  pelisSugeridas: Result[] = [];
  termino   = '';
  hayError  = false;
  mostrar   = false;
  
  constructor(private peliService: PeliService) { }

  Buscar( s: string ) {
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

  sugerencias(t: string) {
    this.hayError = false;
    this.termino = t;
    this.mostrar = true;

    this.peliService.getPeliPorNombre(t)
    .subscribe( pelis => this.pelisSugeridas = pelis.results.splice(0,5),
    (err) => {
      this.pelisSugeridas = []
      this.hayError = true;
      console.log(err);
    });
  }

  onClick(termino: string) {
    this.Buscar( termino );
  }
}
