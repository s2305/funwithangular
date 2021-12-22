import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Movie, Result } from './movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  //callUrl = "https://api.themoviedb.org/3/movie/550?api_key=6785e47ec65aa2dc4033cf3d811fa6f2"
  callUrl="https://api.themoviedb.org/3/search/movie?api_key=6785e47ec65aa2dc4033cf3d811fa6f2&language=en-US&query=star%20wars&page=1&include_adult=false"

  constructor(private http:HttpClient) { }
  movies:Observable<Result>=of()

  getMovies()
  {
      this.movies = this.http.get<Result>(this.callUrl);
  }
}
