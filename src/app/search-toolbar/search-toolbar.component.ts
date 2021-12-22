import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MoviesService } from '../movies-service.service';
import { Movie } from '../movies';


@Component({
  selector: 'app-search-toolbar',
  templateUrl: './search-toolbar.component.html',
  styleUrls: ['./search-toolbar.component.css']
})
export class SearchToolbarComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>=of(["yyy"]);
  movies:Movie[]=[];

  constructor(private moviesService:MoviesService)
  {
       
  }  

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
    console.log("ngoninit de la search bar--");
    
    this.moviesService.getMovies();

    this.moviesService.movies.subscribe((reponse)=>{console.log("on met à jour les movies dans la search bar"); 
    console.log(reponse.results)});
   
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
