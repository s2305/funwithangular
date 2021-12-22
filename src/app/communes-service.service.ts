import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Commune } from './Commune';

@Injectable({
  providedIn: 'root'
})
export class CommunesServiceService {

  callUrl = "https://api.themoviedb.org/3/movie/550?api_key=6785e47ec65aa2dc4033cf3d811fa6f2"
  
  constructor(private http:HttpClient) { }

  getCommunes()
  {
      return this.http.get<Commune>(this.callUrl);
  }
}
