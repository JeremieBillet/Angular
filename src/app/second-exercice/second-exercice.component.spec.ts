import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondExerciceComponent } from './second-exercice.component';

describe('SecondExerciceComponent', () => {
  let component: SecondExerciceComponent;
  let fixture: ComponentFixture<SecondExerciceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondExerciceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
