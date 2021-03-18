import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdExerciceOperationComponent } from './third-exercice-operation.component';

describe('ThirdExerciceOperationComponent', () => {
  let component: ThirdExerciceOperationComponent;
  let fixture: ComponentFixture<ThirdExerciceOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdExerciceOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdExerciceOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
