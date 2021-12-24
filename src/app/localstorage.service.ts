import { Injectable } from '@angular/core';
import { Movie } from './movies';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  addMovie(movie: Movie) {
    const jsonData = JSON.stringify(movie);
    localStorage.setItem(movie.id.toString(), jsonData);

  }

  getMovie(id: number) {
    return localStorage.getItem(id.toString());
  }

  removeMovie(id: number) {
    localStorage.removeItem(id.toString());
  }

  getAllMovies(): Movie[] {
    var values:Movie[] = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      values.push( JSON.parse(localStorage.getItem(keys[i])!));
    }

    return values;
  }

  clearAllMovies() {
    localStorage.clear();
  }


}
