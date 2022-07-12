import { Component } from '@angular/core';
import { Result } from '../../interfaces/peli-interface';
import { PeliService } from '../../services/peli.service';

@Component({
  selector: 'app-descubrir',
  templateUrl: './descubrir.component.html',
  styleUrls: ['./descubrir.component.css']
})
export class DescubrirComponent {
  pelis: Result[] = [];

  constructor(private peliService: PeliService) {
    this.peliService.descubrirPelis('1')
      .subscribe( resp => {
        this.pelis = resp.results;
      });
  }
  

}
