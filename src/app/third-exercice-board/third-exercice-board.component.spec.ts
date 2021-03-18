import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdExerciceBoardComponent } from './third-exercice-board.component';

describe('ThirdExerciceBoardComponent', () => {
  let component: ThirdExerciceBoardComponent;
  let fixture: ComponentFixture<ThirdExerciceBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdExerciceBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdExerciceBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
