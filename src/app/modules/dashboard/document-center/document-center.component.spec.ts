import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentCenterComponent } from './document-center.component';

describe('DocumentCenterComponent', () => {
  let component: DocumentCenterComponent;
  let fixture: ComponentFixture<DocumentCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
