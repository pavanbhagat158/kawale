import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustdtlsComponent } from './custdtls.component';

describe('CustdtlsComponent', () => {
  let component: CustdtlsComponent;
  let fixture: ComponentFixture<CustdtlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustdtlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustdtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
