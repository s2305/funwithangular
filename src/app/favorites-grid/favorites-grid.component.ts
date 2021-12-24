import { Component, OnInit } from '@angular/core';
import { Movie } from '../movies';
import { MoviesService } from '../movies-service.service';
import { Router } from '@angular/router';
import { LocalstorageService } from '../localstorage.service';

@Component({
  selector: 'app-favorites-grid',
  templateUrl: './favorites-grid.component.html',
  styleUrls: ['./favorites-grid.component.css']
})
export class FavoritesGridComponent implements OnInit {

  movies:Movie[]=[]
  selectedMovie?:Movie;

  constructor(private moviesService:MoviesService , private router: Router,public localStorageService:LocalstorageService ) { }

  ngOnInit(): void {
     
    this.fetchMovies();
 
}

  fetchMovies()
  {
    this.movies=this.localStorageService.getAllMovies();
  }

  onSelect(movie:Movie)
  {
    this.selectedMovie = movie;
  }

  unSelect()
  {
    console.log("unselect");
    this.selectedMovie = undefined;
  }

  

  fermetudeDuDetail(valeur:string)
  {
    console.log("fermeture data");
    this.unSelect();
  }
  
  navigateToAddMovie()
  {
    this.router.navigateByUrl('/addmovie');
  }
 


}
