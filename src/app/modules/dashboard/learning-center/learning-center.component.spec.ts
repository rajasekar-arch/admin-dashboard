import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCenterComponent } from './learning-center.component';

describe('LearningCenterComponent', () => {
  let component: LearningCenterComponent;
  let fixture: ComponentFixture<LearningCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
