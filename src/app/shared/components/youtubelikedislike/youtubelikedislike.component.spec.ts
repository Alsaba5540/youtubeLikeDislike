import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubelikedislikeComponent } from './youtubelikedislike.component';

describe('YoutubelikedislikeComponent', () => {
  let component: YoutubelikedislikeComponent;
  let fixture: ComponentFixture<YoutubelikedislikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubelikedislikeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubelikedislikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
