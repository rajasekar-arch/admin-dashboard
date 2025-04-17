import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesBookComponent } from './employees-book.component';

describe('EmployeesBookComponent', () => {
  let component: EmployeesBookComponent;
  let fixture: ComponentFixture<EmployeesBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesBookComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeesBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
