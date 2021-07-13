import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustEnqComponent } from './cust-enq.component';

describe('CustEnqComponent', () => {
  let component: CustEnqComponent;
  let fixture: ComponentFixture<CustEnqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustEnqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustEnqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
