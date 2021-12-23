import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-black-overlay',
  templateUrl: './black-overlay.component.html',
  styleUrls: ['./black-overlay.component.css']
})
export class BlackOverlayComponent implements OnInit {

  @Output() close:EventEmitter<string>= new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick()
  {
    console.log("onClick--sur ovelay")
    this.close.emit("fermeture du detail d un film");
  }

}
