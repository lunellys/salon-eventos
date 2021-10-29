import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosalonesComponent } from './formulariosalones.component';

describe('FormulariosalonesComponent', () => {
  let component: FormulariosalonesComponent;
  let fixture: ComponentFixture<FormulariosalonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariosalonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariosalonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
