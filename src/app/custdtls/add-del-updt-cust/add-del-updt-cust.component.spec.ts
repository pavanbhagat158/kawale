import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDelUpdtCustComponent } from './add-del-updt-cust.component';

describe('AddDelUpdtCustComponent', () => {
  let component: AddDelUpdtCustComponent;
  let fixture: ComponentFixture<AddDelUpdtCustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDelUpdtCustComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDelUpdtCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
