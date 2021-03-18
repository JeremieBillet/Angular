import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdExerciceHeaderComponent } from './third-exercice-header.component';

describe('ThirdExerciceHeaderComponent', () => {
  let component: ThirdExerciceHeaderComponent;
  let fixture: ComponentFixture<ThirdExerciceHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdExerciceHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdExerciceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
