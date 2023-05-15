import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarparkListComponent } from './carpark-list.component';

describe('CarparkListComponent', () => {
  let component: CarparkListComponent;
  let fixture: ComponentFixture<CarparkListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarparkListComponent]
    });
    fixture = TestBed.createComponent(CarparkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
