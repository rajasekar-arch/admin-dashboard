import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeBackgroundComponent } from './customize-background.component';

describe('CustomizeBackgroundComponent', () => {
  let component: CustomizeBackgroundComponent;
  let fixture: ComponentFixture<CustomizeBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizeBackgroundComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomizeBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
