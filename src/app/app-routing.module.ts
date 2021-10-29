import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './paginas/agenda/agenda.component';
import { CateringComponent } from './paginas/catering/catering.component';
import { ConocenosComponent } from './paginas/conocenos/conocenos.component';
import { EquipoComponent } from './paginas/equipo/equipo.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { SalonesComponent } from './paginas/salones/salones.component';
import { Formulario1Component } from './formulario/formulario1/formulario1.component';
import { FormulariosalonesPrestadosComponent } from './formulario/formulariosalones-prestados/formulariosalones-prestados.component';
import { FormularioclienteComponent } from './formulario/formulariocliente/formulariocliente.component';


import { FormulariosalonesComponent } from './formulario/formulariosalones/formulariosalones.component';


const routes: Routes = [
  {path:"principal", component: PrincipalComponent},
  {path:"agenda", component: AgendaComponent},
  {path: "catering", component: CateringComponent},
  {path: "conocenos",component: ConocenosComponent},
  {path: "equipo", component: EquipoComponent},
  {path: "salones", component: SalonesComponent},
  {path: "formulariosalones", component: FormulariosalonesComponent},
  {path: "formulariosalones-prestados", component: FormulariosalonesPrestadosComponent},
  {path: "formulariocliente", component: FormularioclienteComponent},
  {path: "formulario1", component: Formulario1Component},

  {path: "", pathMatch: "full", redirectTo: "/equipo"},
  {path: "", pathMatch: "full", redirectTo: "/formulariosalones"},
  {path: "", pathMatch: "full", redirectTo: "/formulariosalones-prestados"},
  {path: "", pathMatch: "full", redirectTo: "/formulariocliente"},
  {path: "**", pathMatch: "full", redirectTo: "principal"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
