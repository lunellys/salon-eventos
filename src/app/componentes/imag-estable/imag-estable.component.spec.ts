import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagEstableComponent } from './imag-estable.component';

describe('ImagEstableComponent', () => {
  let component: ImagEstableComponent;
  let fixture: ComponentFixture<ImagEstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagEstableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagEstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
