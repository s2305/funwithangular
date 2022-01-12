import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Movie } from '../movies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent implements OnInit,OnChanges {

  @Input() movie:Movie | undefined
  @Output() fermetureDetail:EventEmitter<string>=new EventEmitter<string>();

  isFavorite?:boolean;
  constructor(public localStorage:LocalstorageService,private _snackBar: MatSnackBar,
    public localStorageService:LocalstorageService, private router:Router) { }

  ngOnInit(): void {
    this.isAFavorite()
  }

  ngOnChanges(changes: SimpleChanges) {
    this.isAFavorite()
  }

  onClose()
  {
    this.fermetureDetail.emit("femeture du detail")
  }

  showSnackBar(txt : string)
  {
    this.isAFavorite();
    let snackBarRef = this._snackBar.open(txt,undefined,{
      duration: 3000
    });
  }

  isAFavorite()
  {
    if(this.movie)
    {
    this.isFavorite = this.localStorageService.getMovie(this.movie!.id)!=null;
   
    }
    else
    {
      this.isFavorite = false;
    }
  }

  goToEditMovie()
  {
    this.router.navigateByUrl('/editmovie');
  }

 
}
