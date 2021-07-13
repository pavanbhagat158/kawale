import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWorkorderComponent } from './show-workorder.component';

describe('ShowWorkorderComponent', () => {
  let component: ShowWorkorderComponent;
  let fixture: ComponentFixture<ShowWorkorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowWorkorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowWorkorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
