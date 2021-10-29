import { Component, OnInit } from '@angular/core';
import { SalonesPrestadosService } from 'src/app/servicios/salones-prestados.service';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulariosalones-prestados',
  templateUrl: './formulariosalones-prestados.component.html',
  styleUrls: ['./formulariosalones-prestados.component.css']
})
export class FormulariosalonesPrestadosComponent implements OnInit {

  myform:FormGroup  
  id_editar:number=0;
  constructor(private _builder:FormBuilder,private salonP: SalonesPrestadosService) { 
    this.myform=this._builder.group({
      IdSalones: ['', [Validators.required, Validators.maxLength(50)]]  
      
    })
  }
  lista_salonP: any;
  nuevocon={
    IdSalones:null
    
  }
 
  ////// cuando carga el componente se activa ngonInit y llama el metodo  recuperartodos
  ngOnInit() {
    this.recuperarTodos();
  }

  /// este metodo llama al servicio que se llama recuperar todo que tiene la 
  //ruta para la api--> recuperar toto = getAll
  recuperarTodos() {
    this.salonP.recuperarTodos().subscribe(result => this.lista_salonP = result);
  }
  //este metodo carga los datos del formulario y llama al servicio con metodo alta
  // que tiene la ruta de agregar  alta=add_contact
  alta(value:any) {
    this.nuevocon={
      IdSalones:value.IdSalones
    }
    this.salonP.alta(this.nuevocon).subscribe(datos => {
      console.log(datos)
      alert("salonP agregado ")
      this.myform.reset()
      this.recuperarTodos()
     });
  }
  // este metodo obtiene el id del contacto a eliminar
  // llama el metodo baja del servicio  baja=delete/<id>
  baja(id:number) {
    if (window.confirm("Esta seguro de eliminar el registro Numero "+id+" ?")) {
      this.salonP.baja(id).subscribe(datos => {
        console.log(datos)
        alert("salonP eliminado ")
        this.myform.reset()
        this.recuperarTodos()
      });
    }

   
  }

  // este metodo obtiene el id del contacto a editar
  // llama el metodo baja del servicio  modificacion=update/<id>
  modificacion(value:any) {
    this.nuevocon={
      IdSalones:value.IdSalones
    }
    this.salonP.modificacion(this.nuevocon,this.id_editar).subscribe(datos => {
      console.log(datos)
      alert("salonP editado ")
      this.myform.reset()
      this.recuperarTodos()
    });    
  }
  
  //este metodo carga los datos de la fila al formulario
  seleccionar(con_edi:any) {
   this.id_editar=con_edi['IdSalones_p'];
   this.myform.setValue({
    IdSalones:con_edi['IdSalones']
  })
  }

}
