import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Movie, Result } from './movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  //callUrl = "https://api.themoviedb.org/3/movie/550?api_key=6785e47ec65aa2dc4033cf3d811fa6f2"
  callUrl=""

  constructor(private http:HttpClient) { }
  movies$:Subject<Result>=new Subject<Result>()
  lastfetchedmovies:Subject<Result>=new Subject<Result>()

  getMovies(searchTerm:string)
  {  
    console.log("on fait un get movies");
    this.callUrl=`https://api.themoviedb.org/3/search/movie?api_key=6785e47ec65aa2dc4033cf3d811fa6f2&language=en-US&query=${searchTerm}&page=1&include_adult=false`
    return this.http.get<Result>(this.callUrl).pipe(tap(data=>{
      this.movies$.next(data);
    }));
    
  }
}
