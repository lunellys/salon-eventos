import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PieComponent } from './componentes/pie/pie.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { ImagEstableComponent } from './componentes/imag-estable/imag-estable.component';
import { ConocenosComponent } from './paginas/conocenos/conocenos.component';
import { SalonesComponent } from './paginas/salones/salones.component';
import { AgendaComponent } from './paginas/agenda/agenda.component';
import { CateringComponent } from './paginas/catering/catering.component';
import { EquipoComponent } from './paginas/equipo/equipo.component';
import { CardsComponent } from './componentes/cards/cards.component';
import { Formulario1Component } from './formulario/formulario1/formulario1.component';


import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioclienteComponent } from './formulario/formulariocliente/formulariocliente.component';

import { FormulariosalonesComponent } from './formulario/formulariosalones/formulariosalones.component';
import { FormulariosalonesPrestadosComponent } from './formulario/formulariosalones-prestados/formulariosalones-prestados.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PieComponent,
    PrincipalComponent,
    CarruselComponent,
    ImagEstableComponent,
    ConocenosComponent,
    SalonesComponent,
    AgendaComponent,
    CateringComponent,
    EquipoComponent,
    CardsComponent,
    Formulario1Component,
    
    FormularioclienteComponent,
    
    FormulariosalonesComponent,
    FormulariosalonesPrestadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
