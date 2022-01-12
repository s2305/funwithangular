import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { SearchToolbarComponent } from './search-toolbar/search-toolbar.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
// common-widgets.module.ts
import {
  MatFormFieldModule
} from '@angular/material/form-field';
import {
  MatInputModule
} from '@angular/material/input';
import { ResultsGridComponent } from './results-grid/results-grid.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { BlackOverlayComponent } from './black-overlay/black-overlay.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';
import { FavoritesGridComponent } from './favorites-grid/favorites-grid.component';
import { EditmovieComponent } from './editmovie/editmovie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    SearchToolbarComponent,
    ResultsGridComponent,
    MovieCardComponent,
    DetailMovieComponent,
    BlackOverlayComponent,
    AddMovieComponent,
    MoviesSearchComponent,
    FavoritesGridComponent,
    EditmovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatMenuModule,
//     // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// // and returns simulated server responses.
// // Remove it when a real server is ready to receive requests.
// HttpClientInMemoryWebApiModule.forRoot(
//   InMemoryDataService, { dataEncapsulation: false }
// ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
