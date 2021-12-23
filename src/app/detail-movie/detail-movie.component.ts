import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Movie } from '../movies';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent implements OnInit {

  @Input() movie:Movie | undefined
  @Output() fermetureDetail:EventEmitter<string>=new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClose()
  {
    this.fermetureDetail.emit("femeture du detail")
  }

}
