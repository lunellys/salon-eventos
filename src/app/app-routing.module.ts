import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './paginas/agenda/agenda.component';
import { CateringComponent } from './paginas/catering/catering.component';
import { ConocenosComponent } from './paginas/conocenos/conocenos.component';
import { EquipoComponent } from './paginas/equipo/equipo.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { SalonesComponent } from './paginas/salones/salones.component';


const routes: Routes = [
  {path:"principal", component: PrincipalComponent},
  {path:"agenda", component: AgendaComponent},
  {path: "catering", component: CateringComponent},
  {path: "conocenos",component: ConocenosComponent},
  {path: "equipo", component: EquipoComponent},
  {path: "salones", component: SalonesComponent},
  {path: "**", pathMatch: "full", redirectTo: "principal"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
