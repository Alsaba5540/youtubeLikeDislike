import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Like3Component } from './like3.component';

describe('Like3Component', () => {
  let component: Like3Component;
  let fixture: ComponentFixture<Like3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Like3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Like3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
