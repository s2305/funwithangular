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

  constructor(private moviesService:MoviesService ) { }

  ngOnInit(): void {
    // this.moviesService.movies.subscribe(
    //   (reponse)=>{console.log("----on met à jour les movies dans la grid"); console.log(reponse.results)  }
    // )
  }

}
