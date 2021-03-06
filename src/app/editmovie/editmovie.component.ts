import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Movie } from '../movies';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editmovie',
  templateUrl: './editmovie.component.html',
  styleUrls: ['./editmovie.component.css']
})
export class EditmovieComponent implements OnChanges {

 // @Input() movie:Movie | undefined
 // @Output() fermetureDetail:EventEmitter<string>=new EventEmitter<string>();
  movie:Movie | undefined
  movieForm! : FormGroup ;

 //injection du FormBuilder
  constructor(private fb: FormBuilder, private router: Router)
  { 
     var film= this.router.getCurrentNavigation()?.extras?.state?.['movie'];
     console.log("--------");
     console.log(film);
     console.log("--------");

     this.movie = film;

     this.movieForm = this.fb.group({
      id: [this.movie?.id],
      original_language: [this.movie?.original_language],
      original_title: [this.movie?.original_title,[Validators.required, Validators.minLength(2)]],
      overview: [this.movie?.overview],
      popularity: [this.movie?.popularity],
      release_date: [this.movie?.release_date],
      title: [this.movie?.title],
      video: [this.movie?.title],
      vote_average: [this.movie?.vote_average],
      vote_count: [this.movie?.vote_count],
      // address: this.fb.group({
      //   street: [''],
      //   city: [''],
      //   state: [''],
      //   zip: ['']
      // }),
      });
  }

  ngOnInit(): void {
   
  }

  ngOnChanges(changes: SimpleChanges): void {
   
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.movieForm.value);
  }

}
