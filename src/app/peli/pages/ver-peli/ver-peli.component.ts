import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Result } from '../../interfaces/peli-interface';
import { PeliService } from '../../services/peli.service';

@Component({
  selector: 'app-ver-peli',
  templateUrl: './ver-peli.component.html'
})
export class VerPeliComponent implements OnInit {
  public peli !: Result;

  constructor(private activatedRoute: ActivatedRoute,
              private peliService: PeliService) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({ id }) => this.peliService.getPeliPorId(id))
    )
    .subscribe(peli => this.peli = peli);
  }

}
