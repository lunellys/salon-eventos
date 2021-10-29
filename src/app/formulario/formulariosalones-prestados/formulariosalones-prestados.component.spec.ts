import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosalonesPrestadosComponent } from './formulariosalones-prestados.component';

describe('FormulariosalonesPrestadosComponent', () => {
  let component: FormulariosalonesPrestadosComponent;
  let fixture: ComponentFixture<FormulariosalonesPrestadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariosalonesPrestadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariosalonesPrestadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
