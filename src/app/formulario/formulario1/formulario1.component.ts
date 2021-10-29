import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/app/servicios/agenda.service';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css']
})
export class Formulario1Component implements OnInit {

  myform:FormGroup  
  id_editar:number=0;
  constructor(private _builder:FormBuilder,private agenda: AgendaService) { 
    this.myform=this._builder.group({
      IdSalones_p: ['', [Validators.required, Validators.maxLength(50)]]  ,
      IdCliente: ['', [Validators.required]]  ,
      FechaHora: ['', [Validators.required, Validators.maxLength(100)]] 
    })
  }
  lista_agendas: any;
  nuevocon={
    IdSalones_p:null,
    IdCliente:null,
    FechaHora:null
  }
 
  ////// cuando carga el componente se activa ngonInit y llama el metodo  recuperartodos
  ngOnInit() {
    this.recuperarTodos();
  }

  /// este metodo llama al servicio que se llama recuperar todo que tiene la 
  //ruta para la api--> recuperar toto = getAll
  recuperarTodos() {
    this.agenda.recuperarTodos().subscribe(result => this.lista_agendas = result);
  }
  //este metodo carga los datos del formulario y llama al servicio con metodo alta
  // que tiene la ruta de agregar  alta=add_contact
  alta(value:any) {
    this.nuevocon={
      IdSalones_p:value.IdSalones_p,
      IdCliente:value.IdCliente,
      FechaHora:value.FechaHora
    }
    this.agenda.alta(this.nuevocon).subscribe(datos => {
      console.log(datos)
      alert("agenda agregada ")
      this.myform.reset()
      this.recuperarTodos()
     });
  }
  // este metodo obtiene el id del contacto a eliminar
  // llama el metodo baja del servicio  baja=delete/<id>
  baja(id:number) {
    if (window.confirm("Esta seguro de eliminar el registro Numero "+id+" ?")) {
      this.agenda.baja(id).subscribe(datos => {
        console.log(datos)
        alert("agenda eliminado ")
        this.myform.reset()
        this.recuperarTodos()
      });
    }

   
  }

  // este metodo obtiene el id del contacto a editar
  // llama el metodo baja del servicio  modificacion=update/<id>
  modificacion(value:any) {
    this.nuevocon={
      IdSalones_p:value.IdSalones_p,
      IdCliente:value.IdCliente,
      FechaHora:value.FechaHora
    }
    this.agenda.modificacion(this.nuevocon,this.id_editar).subscribe(datos => {
      console.log(datos)
      alert("agenda editado ")
      this.myform.reset()
      this.recuperarTodos()
    });    
  }
  
  //este metodo carga los datos de la fila al formulario
  seleccionar(con_edi:any) {
   this.id_editar=con_edi['IdAgenda'];
   this.myform.setValue({
    IdSalones_p:con_edi['IdSalones_p'],
    IdCliente:con_edi['IdCliente'],
    FechaHora:con_edi['FechaHora']
  })
  }

}
