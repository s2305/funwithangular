import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Movie } from '../movies';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent implements OnInit {

  @Input() movie:Movie | undefined
  @Output() fermetureDetail:EventEmitter<string>=new EventEmitter<string>();

  constructor(public localStorage:LocalstorageService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onClose()
  {
    this.fermetureDetail.emit("femeture du detail")
  }

  showSnackBar(txt : string)
  {
    let snackBarRef = this._snackBar.open('This movie is part of your favorite now !',undefined,{
      duration: 3000
    });
  }

}
