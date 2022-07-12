import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescubrirComponent } from './peli/pages/descubrir/descubrir.component';

const routes: Routes = [
  {
    path: '',
    component: DescubrirComponent
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
