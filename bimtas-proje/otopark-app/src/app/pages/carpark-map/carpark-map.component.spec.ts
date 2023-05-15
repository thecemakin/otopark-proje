import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarparkMapComponent } from './carpark-map.component';

describe('CarparkMapComponent', () => {
  let component: CarparkMapComponent;
  let fixture: ComponentFixture<CarparkMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarparkMapComponent]
    });
    fixture = TestBed.createComponent(CarparkMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
