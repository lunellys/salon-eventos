import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioagendaComponent } from './formularioagenda.component';

describe('FormularioagendaComponent', () => {
  let component: FormularioagendaComponent;
  let fixture: ComponentFixture<FormularioagendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioagendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioagendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
