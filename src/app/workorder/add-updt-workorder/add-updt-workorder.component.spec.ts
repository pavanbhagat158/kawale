import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdtWorkorderComponent } from './add-updt-workorder.component';

describe('AddUpdtWorkorderComponent', () => {
  let component: AddUpdtWorkorderComponent;
  let fixture: ComponentFixture<AddUpdtWorkorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdtWorkorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdtWorkorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
