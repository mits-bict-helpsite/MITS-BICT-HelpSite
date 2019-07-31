import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestunitComponent } from './testunit.component';

describe('TestunitComponent', () => {
  let component: TestunitComponent;
  let fixture: ComponentFixture<TestunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
