import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundRedirectComponent } from './not-found-redirect.component';

describe('NotFoundRedirectComponent', () => {
  let component: NotFoundRedirectComponent;
  let fixture: ComponentFixture<NotFoundRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundRedirectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
