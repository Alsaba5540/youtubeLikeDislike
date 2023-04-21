import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-like3',
  templateUrl: './like3.component.html',
  styleUrls: ['./like3.component.scss']
})
export class Like3Component implements OnInit {
  @Input() unLiked !:boolean;
  @Output() emmitLikeStatus : EventEmitter<boolean> = new EventEmitter<boolean>()
   
  constructor() { }

  ngOnInit(): void {
  }
  onlikeDislike(){
    this.unLiked = !this.unLiked
    this.emmitLikeStatus.emit(this.unLiked)

  }


}
