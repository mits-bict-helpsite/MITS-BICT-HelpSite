import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsReelComponent } from './news-reel.component';

describe('NewsReelComponent', () => {
  let component: NewsReelComponent;
  let fixture: ComponentFixture<NewsReelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsReelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsReelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
