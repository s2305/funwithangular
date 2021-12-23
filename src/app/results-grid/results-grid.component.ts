import { Component, OnInit } from '@angular/core';
import { Movie } from '../movies';
import { MoviesService } from '../movies-service.service';

@Component({
  selector: 'app-results-grid',
  templateUrl: './results-grid.component.html',
  styleUrls: ['./results-grid.component.css']
})
export class ResultsGridComponent implements OnInit {

  movies:Movie[]=[]
  selectedMovie?:Movie;

  constructor(private moviesService:MoviesService ) { }

  ngOnInit(): void {
    this.moviesService.movies$.subscribe(
      (reponse)=>{
        console.log("----on met à jour les movies dans la grid"); 
        console.log(reponse.results); this.movies=reponse.results  }
    )
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
  

}
