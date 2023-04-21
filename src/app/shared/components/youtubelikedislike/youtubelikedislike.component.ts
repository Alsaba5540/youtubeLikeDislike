import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-youtubelikedislike',
  templateUrl: './youtubelikedislike.component.html',
  styleUrls: ['./youtubelikedislike.component.scss']
})
export class YoutubelikedislikeComponent implements OnInit {
@Input() isLiked !:boolean;
@Output() emmitLikeStatus : EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }
  onlikeDislike(){
    this.isLiked = !this.isLiked
    this.emmitLikeStatus.emit(this.isLiked)

  }

}
