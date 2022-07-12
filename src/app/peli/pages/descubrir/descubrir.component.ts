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
  actual: number = 0;
  last: number = 1;
  pages: boolean = false;

  constructor(private peliService: PeliService) {
    this.pageOne();
  }
 
  pageOne(): void {
    this.peliService.descubrirPelis('1')
      .subscribe( resp => {
        this.pelis = resp.results;
        this.actual = resp.page;
        this.last = resp.total_pages;
        if(this.last > 500) this.last = 500;
        if(this.last > 1) this.pages = true;
      });
  }

  pageRight(): void {
    if (this.actual === this.last) this.actual = 0;

    this.peliService.descubrirPelis(`${this.actual+1}`)
      .subscribe( resp => {
        this.pelis = resp.results;
        this.actual = resp.page;
      });
  }

  pageLeft(): void {
    if (this.actual === 1) this.actual = 501;

    this.peliService.descubrirPelis(`${this.actual-1}`)
      .subscribe( resp => {
        this.pelis = resp.results;
        this.actual = resp.page;
      });
  }

  pageSearch(page: any): void {
    let nPage = page.target.value;  
    
    if( nPage > 0 && nPage <= this.last )
    {
      this.peliService.descubrirPelis(`${nPage}`)
      .subscribe( resp => {
        this.pelis = resp.results;
        this.actual = resp.page;
      }); 
    }
    else
      this.pageOne();
  } 
}
