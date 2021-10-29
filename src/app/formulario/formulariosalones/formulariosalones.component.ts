import { Component, OnInit } from '@angular/core';
import { SalonesService } from 'src/app/servicios/salones.service';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulariosalones',
  templateUrl: './formulariosalones.component.html',
  styleUrls: ['./formulariosalones.component.css']
})
export class FormulariosalonesComponent implements OnInit {

  myform:FormGroup  
  id_editar:number=0;
  constructor(private _builder:FormBuilder,private contacto: SalonesService) { 
    this.myform=this._builder.group({
      tamano: ['', [Validators.required, Validators.maxLength(50)]]  ,
      tipo_Salon: ['', [Validators.required]]  ,
      precio: ['', [Validators.required, Validators.maxLength(100)]] 
    })
  }
  lista_contactos: any;
  nuevocon={
    tamano:null,
    tipo_Salon:null,
    precio:null
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
      tamano:value.tamano,
      tipo_Salon:value.tipo_Salon,
      precio:value.precio
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
      tamano:value.tamano,
      tipo_Salon:value.tipo_Salon,
      precio:value.precio
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
   this.id_editar=con_edi['IdSalones'];
   this.myform.setValue({
    tamano:con_edi['tamano'],
    tipo_Salon:con_edi['tipo_Salon'],
    precio:con_edi['precio']
  })
  }

}
