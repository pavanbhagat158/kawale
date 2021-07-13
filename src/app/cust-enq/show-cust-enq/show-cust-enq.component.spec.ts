import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCustEnqComponent } from './show-cust-enq.component';

describe('ShowCustEnqComponent', () => {
  let component: ShowCustEnqComponent;
  let fixture: ComponentFixture<ShowCustEnqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCustEnqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCustEnqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
