import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCustEnqComponent } from './add-edit-cust-enq.component';

describe('AddEditCustEnqComponent', () => {
  let component: AddEditCustEnqComponent;
  let fixture: ComponentFixture<AddEditCustEnqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCustEnqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCustEnqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
