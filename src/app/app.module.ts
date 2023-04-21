import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LikeComponent } from './shared/components/like/like/like.component';
import { Like2Component } from './shared/components/like2/like2.component';
import { YoutubelikedislikeComponent } from './shared/components/youtubelikedislike/youtubelikedislike.component';
import { Like3Component } from './shared/components/like3/like3.component';

@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    Like2Component,
    YoutubelikedislikeComponent,
    Like3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
