import { Component, OnInit } from '@angular/core';
import { Movie } from '../movies';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {


  submitted = false;
  model = new Movie(false,"",[1], 12345678,"fr","Merry christmas","c'est l'histoire du Père Noël", 100, "","2021/12/24","Joyeux Noël", true, 800,750);
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() { this.submitted = true; console.log("form submitted=> oh yeah")}


}
