import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DescubrirComponent } from './pages/descubrir/descubrir.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { VerPeliComponent } from './pages/ver-peli/ver-peli.component';
import { ListaComponent } from './components/lista/lista.component';
import { BuscadorComponent } from './components/buscador/buscador.component';



@NgModule({
  declarations: [
    DescubrirComponent,
    BuscarComponent,
    VerPeliComponent,
    ListaComponent,
    BuscadorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    DescubrirComponent
  ]
})
export class PeliModule { }
