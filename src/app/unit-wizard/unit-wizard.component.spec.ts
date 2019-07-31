import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitWizardComponent } from './unit-wizard.component';

describe('UnitWizardComponent', () => {
  let component: UnitWizardComponent;
  let fixture: ComponentFixture<UnitWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
