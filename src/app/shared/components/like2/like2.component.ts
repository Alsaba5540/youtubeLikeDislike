import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-like2',
  templateUrl: './like2.component.html',
  styleUrls: ['./like2.component.scss']
})
export class Like2Component implements OnInit {
   @Input() isLiked !: boolean;
   @Output() emmitLikeStatus : EventEmitter<boolean>  = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }
  onLikeDisLiked(){
    this.isLiked = !this.isLiked
   this.emmitLikeStatus.emit(this.isLiked)

   

  }

}
