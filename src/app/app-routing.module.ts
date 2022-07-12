import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuscarComponent } from './peli/pages/buscar/buscar.component';
import { DescubrirComponent } from './peli/pages/descubrir/descubrir.component';
import { VerPeliComponent } from './peli/pages/ver-peli/ver-peli.component';

const routes: Routes = [
  {
    path: '',
    component: DescubrirComponent
  },
  {
    path: 'buscar',
    component: BuscarComponent 
  },
  {
    path: 'peli/:id',
    component: VerPeliComponent 
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
