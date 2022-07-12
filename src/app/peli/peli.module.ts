import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescubrirComponent } from './pages/descubrir/descubrir.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { VerPeliComponent } from './pages/ver-peli/ver-peli.component';



@NgModule({
  declarations: [
    DescubrirComponent,
    BuscarComponent,
    VerPeliComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DescubrirComponent
  ]
})
export class PeliModule { }
