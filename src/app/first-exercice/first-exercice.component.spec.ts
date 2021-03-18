import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstExerciceComponent } from './first-exercice.component';

describe('FirstExerciceComponent', () => {
  let component: FirstExerciceComponent;
  let fixture: ComponentFixture<FirstExerciceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstExerciceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
