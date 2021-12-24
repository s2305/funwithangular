import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavoritesGridComponent } from './favorites-grid/favorites-grid.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';

const routes: Routes = [
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'searchmovies', component: MoviesSearchComponent  },
  { path: 'addmovie', component: AddMovieComponent  },
  { path: 'favorites', component: FavoritesGridComponent  },

  { path: '', redirectTo: '/searchmovies', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }