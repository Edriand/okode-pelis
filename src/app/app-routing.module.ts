import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './movie/pages/search/search.component';
import { DiscoverComponent } from './movie/pages/discover/discover.component';
import { ShowMovieComponent } from './movie/pages/show-movie/show-movie.component';

const routes: Routes = [
  {
    path: '',
    component: DiscoverComponent
  },
  {
    path: 'search',
    component: SearchComponent 
  },
  {
    path: 'movie/:id',
    component: ShowMovieComponent 
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
