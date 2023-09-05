import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMedicineComponent } from './show-medicine.component';

describe('ShowMedicineComponent', () => {
  let component: ShowMedicineComponent;
  let fixture: ComponentFixture<ShowMedicineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowMedicineComponent]
    });
    fixture = TestBed.createComponent(ShowMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
