import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavesManagementComponent } from './leaves-management.component';

describe('LeavesManagementComponent', () => {
  let component: LeavesManagementComponent;
  let fixture: ComponentFixture<LeavesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeavesManagementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeavesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
