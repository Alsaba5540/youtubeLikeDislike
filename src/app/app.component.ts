import { Component} from '@angular/core';
import { IindianYouTubers, Ireels } from './shared/model/Ireels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


reels :Array<Ireels>=[
  {
    title:"lorem epsum 1",
    likeCount : 1234,
    isLike : true,
    id: 1,


  },
  {
    title:"lorem epsum 2",
    likeCount : 123,
    isLike : false,
    id: 2,

  },
  {
    title:"lorem epsum",
    likeCount : 12,
    isLike : false,
    id: 3

  },
  {
    title:"lorem epsum",
    likeCount : 12,
    isLike : true ,
    id: 4

  }
]
getLikeStatus(likeStatus:any , id:number){
  console.log(likeStatus , id);
  this.reels.forEach(reel =>{
    if(reel.id === id){
       if(likeStatus){
         reel.likeCount++
       }else{
        reel.likeCount--

       }
    }

  })

}
 indianYouTubers :Array<IindianYouTubers> = [
  { name: 'BB Ki Vines', subscribers: 20.9 ,id:1, isLikeCount: 1 ,isDislikeCount:0, isLike : true },
  { name: 'Technical Guruji', subscribers: 21.5 ,id:2, isLikeCount: 1 ,isDislikeCount:0, isLike : false },
  { name: 'Amit Bhadana', subscribers: 22.2 ,id:3, isLikeCount: 1 ,isDislikeCount:0, isLike : true },
  { name: 'Ashish Chanchlani Vines', subscribers: 27.1 ,id:4, isLikeCount: 1 ,isDislikeCount:0, isLike : true },
  { name: 'CarryMinati', subscribers: 31.5 ,id:5, isLikeCount: 1 ,isDislikeCount:0, isLike : true },
  { name: 'Gaurav Chaudhary', subscribers: 21.8 ,id:6, isLikeCount: 1 ,isDislikeCount:0, isLike : false },
  { name: 'Mumbiker Nikhil', subscribers: 4.74 ,id:7, isLikeCount: 1 ,isDislikeCount:0, isLike : false },
  { name: 'Harsh Beniwal', subscribers: 12.9 ,id:8, isLikeCount: 1 ,isDislikeCount:0, isLike : true },
  { name: 'Sandeep Maheshwari', subscribers: 20.7 ,id:9, isLikeCount: 1 ,isDislikeCount:0, isLike : true },
  { name: 'Round2Hell', subscribers: 15.7 ,id:10, isLikeCount: 1 ,isDislikeCount:0, isLike : true },
  { name: 'Triggered Insaan', subscribers: 12.4 ,id:11, isLikeCount: 1 ,isDislikeCount:0, isLike : false },
  { name: 'Flying Beast', subscribers: 4.11 ,id:12, isLikeCount: 1 ,isDislikeCount:0, isLike : true },
  { name: 'FactTechz', subscribers: 8.35 ,id:13, isLikeCount: 1 ,isDislikeCount:0, isLike : true },
  { name: 'Dr. Vivek Bindra: Motivational Speaker', subscribers: 14.7 ,id:14, isLikeCount: 1 ,isDislikeCount:0, isLike : true },
  { name: 'BeerBiceps', subscribers: 2.89 ,id:15, isLikeCount: 1 ,isDislikeCount:0, isLike : false },
  { name: 'Be YouNick', subscribers: 9.97 ,id:16, isLikeCount: 1 ,isDislikeCount:0, isLike : false },
  { name: 'MyMissAnand', subscribers: 15.8 ,id:17, isLikeCount: 1 ,isDislikeCount:0, isLike : true },
  { name: 'CookingShooking Hindi', subscribers: 8.53 ,id:18, isLikeCount: 1 ,isDislikeCount:0, isLike : false },
  { name: 'Praveen Dilliwala', subscribers: 2.05 ,id:19, isLikeCount: 1 ,isDislikeCount:0, isLike : false },
  { name: 'Waqar Khan', subscribers: 1.5 ,id:20, isLikeCount: 1 ,isDislikeCount:0, isLike : false }
];
getLikeStatusOfYoutube(likeStatus:boolean, id:number){
  console.log(likeStatus , id)
  this.indianYouTubers.forEach(youtubers =>{
    if(youtubers.id === id ){
      if(likeStatus){
     youtubers.isLikeCount++

      }else{
        youtubers.isDislikeCount--
      }
    }
  })
}
getDisLikeStatusOfYoutube(unlikeStatus: boolean , id:number) {
console.log(unlikeStatus)
this.indianYouTubers.forEach(youtubers2 =>{
  if(youtubers2.id=== id){
    if(unlikeStatus){
      youtubers2.isDislikeCount++
    }else{
     youtubers2.isLikeCount--
    }
  }
})
  }
}