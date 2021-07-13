import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcustdtlsComponent } from './showcustdtls.component';

describe('ShowcustdtlsComponent', () => {
  let component: ShowcustdtlsComponent;
  let fixture: ComponentFixture<ShowcustdtlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcustdtlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcustdtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
