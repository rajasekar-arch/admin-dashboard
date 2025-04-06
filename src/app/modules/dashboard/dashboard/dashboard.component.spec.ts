import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { MaterialModule } from '../../material-module/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DashboardComponent,
        CommonModule,
        RouterModule,
        RouterLink,
        MaterialModule,
        RouterTestingModule,
      ],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check the menuListItems defined', () => {
    expect(component.menuListItems).toBeTruthy();
  });

  it('should check the menuListItems should have length', () => {
    expect(component.menuListItems.length).toBeGreaterThan(0);
  });
});
