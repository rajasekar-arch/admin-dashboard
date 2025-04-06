import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListComponent } from './users-list.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../material-module/material/material.module';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersListComponent, CommonModule, HttpClientModule, MaterialModule],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should displayedColumns defined', () => {
    expect(component.displayedColumns).toBeDefined();
  });

  it('should dataSource defined', () => {
    expect(component.dataSource).toBeDefined();
  });

  it('should called on ngOnInit', () => {
    const spy = spyOn(component, 'getUsersList');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });
});
