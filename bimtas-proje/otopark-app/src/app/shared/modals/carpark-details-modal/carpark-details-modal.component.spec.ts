import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarparkDetailsModalComponent } from './carpark-details-modal.component';

describe('CarparkDetailsModalComponent', () => {
  let component: CarparkDetailsModalComponent;
  let fixture: ComponentFixture<CarparkDetailsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarparkDetailsModalComponent]
    });
    fixture = TestBed.createComponent(CarparkDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
