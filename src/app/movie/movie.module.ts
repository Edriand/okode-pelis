import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SeekerComponent } from './components/seeker/seeker.component';
import { ListComponent } from './components/list/list.component';
import { SearchComponent } from './pages/search/search.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { ShowMovieComponent } from './pages/show-movie/show-movie.component';



@NgModule({
  declarations: [
    SearchComponent,
    SeekerComponent,
    ListComponent,
    DiscoverComponent,
    ShowMovieComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    DiscoverComponent
  ]
})
export class MovieModule { }
