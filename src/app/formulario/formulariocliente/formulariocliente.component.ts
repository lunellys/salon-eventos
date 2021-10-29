import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulariocliente',
  templateUrl: './formulariocliente.component.html',
  styleUrls: ['./formulariocliente.component.css']
})
export class FormularioclienteComponent implements OnInit {

  myform:FormGroup  
  id_editar:number=0;
  constructor(private _builder:FormBuilder,private contacto: ClienteService) { 
    this.myform=this._builder.group({
      nombres: ['', [Validators.required, Validators.maxLength(50)]]  ,
      apellidos: ['', [Validators.required]]  ,
      identificacion: ['', [Validators.required, Validators.maxLength(100)]] 
    })
  }
  lista_contactos: any;
  nuevocon={
    nombres:null,
    apellidos:null,
    identificacion:null
  }
 
  ////// cuando carga el componente se activa ngonInit y llama el metodo  recuperartodos
  ngOnInit() {
    this.recuperarTodos();
  }

  /// este metodo llama al servicio que se llama recuperar todo que tiene la 
  //ruta para la api--> recuperar toto = getAll
  recuperarTodos() {
    this.contacto.recuperarTodos().subscribe(result => this.lista_contactos = result);
  }
  //este metodo carga los datos del formulario y llama al servicio con metodo alta
  // que tiene la ruta de agregar  alta=add_contact
  alta(value:any) {
    this.nuevocon={
      nombres:value.nombres,
      apellidos:value.apellidos,
      identificacion:value.identificacion
    }
    this.contacto.alta(this.nuevocon).subscribe(datos => {
      console.log(datos)
      alert("Contacto agregado ")
      this.myform.reset()
      this.recuperarTodos()
     });
  }
  // este metodo obtiene el id del contacto a eliminar
  // llama el metodo baja del servicio  baja=delete/<id>
  baja(id:number) {
    if (window.confirm("Esta seguro de eliminar el registro Numero "+id+" ?")) {
      this.contacto.baja(id).subscribe(datos => {
        console.log(datos)
        alert("Contacto eliminado ")
        this.myform.reset()
        this.recuperarTodos()
      });
    }

   
  }

  // este metodo obtiene el id del contacto a editar
  // llama el metodo baja del servicio  modificacion=update/<id>
  modificacion(value:any) {
    this.nuevocon={
      nombres:value.nombres,
      apellidos:value.apellidos,
      identificacion:value.identificacion
    }
    this.contacto.modificacion(this.nuevocon,this.id_editar).subscribe(datos => {
      console.log(datos)
      alert("Contacto editado ")
      this.myform.reset()
      this.recuperarTodos()
    });    
  }
  
  //este metodo carga los datos de la fila al formulario
  seleccionar(con_edi:any) {
   this.id_editar=con_edi['IdCliente'];
   this.myform.setValue({
    nombres:con_edi['nombres'],
    apellidos:con_edi['apellidos'],
    identificacion:con_edi['identificacion']
  })
  }

}
