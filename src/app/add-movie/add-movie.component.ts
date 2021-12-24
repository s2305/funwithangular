import { Component, OnInit } from '@angular/core';
import { Movie } from '../movies';
import { Location } from '@angular/common'

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  movieTypes = ['Action movie', 'Romantic movie',
  'Funny movie', ];
  submitted = false;
  model = new Movie(false,"",[1], 12345678,"fr","Merry christmas","c'est l'histoire du Père Noël", 100, "","2021/12/24","Joyeux Noël", true, 800,750);
  
  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  onSubmit() { this.submitted = true;
    alert("form submitted but this feature is not implemented yet !!!!");this.location.back(); }


  saveMovie()
  {
    console.log("sorry we haven't implemented this feature yet");
  }

}
