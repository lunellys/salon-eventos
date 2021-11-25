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
  constructor(private _builder:FormBuilder,private cliente: ClienteService) { 
    this.myform=this._builder.group({
      Ident_Cliente: ['', [Validators.required, Validators.maxLength(50)]]  ,
      Nom_cliente: ['', [Validators.required]]  ,
      Apel_Cliente: ['', [Validators.required, Validators.maxLength(100)]] ,
      Edad_Cliente: ['', [Validators.required]]  ,
      Afiliado: ['', [Validators.required, Validators.maxLength(100)]] 

    })
  }
  lista_clientes: any;
  nuevocon={
    Ident_Cliente:null,
    Nom_cliente:null,
    Apel_Cliente:null,
    Edad_Cliente:null,
    Afiliado:null
  }
 
  ////// cuando carga el componente se activa ngonInit y llama el metodo  recuperartodos
  ngOnInit() {
    this.recuperarTodos();
  }

  /// este metodo llama al servicio que se llama recuperar todo que tiene la 
  //ruta para la api--> recuperar toto = getAll
  recuperarTodos() {
    this.cliente.recuperarTodos().subscribe(result => this.lista_clientes = result);
  }
  //este metodo carga los datos del formulario y llama al servicio con metodo alta
  // que tiene la ruta de agregar  alta=add_contact
  alta(value:any) {
    this.nuevocon={
      Ident_Cliente:value.Ident_Cliente,
      Nom_cliente:value.Nom_cliente,
      Apel_Cliente:value.Apel_Cliente,
      Edad_Cliente:value.Edad_Cliente,
      Afiliado:value.Afiliado
    }
    this.cliente.alta(this.nuevocon).subscribe(datos => {
      console.log(datos)
      alert("cliente agregado ")
      this.myform.reset()
      this.recuperarTodos()
     });
  }
  // este metodo obtiene el id del contacto a eliminar
  // llama el metodo baja del servicio  baja=delete/<id>
  baja(id:number) {
    if (window.confirm("Esta seguro de eliminar el registro Numero "+id+" ?")) {
      this.cliente.baja(id).subscribe(datos => {
        console.log(datos)
        alert("cliente eliminado ")
        this.myform.reset()
        this.recuperarTodos()
      });
    }

   
  }

  // este metodo obtiene el id del cliente a editar
  // llama el metodo baja del servicio  modificacion=update/<id>
  modificacion(value:any) {
    this.nuevocon={
      Ident_Cliente:value.Ident_Cliente,
      Nom_cliente:value.Nom_cliente,
      Apel_Cliente:value.Apel_Cliente,
      Edad_Cliente:value.Edad_Cliente,
      Afiliado:value.Afiliado
    }
    this.cliente.modificacion(this.nuevocon,this.id_editar).subscribe(datos => {
      console.log(datos)
      alert("cliente editado ")
      this.myform.reset()
      this.recuperarTodos()
    });    
  }
  
  //este metodo carga los datos de la fila al formulario
  seleccionar(con_edi:any) {
   this.id_editar=con_edi['Id_Cliente'];
   this.myform.setValue({
    Ident_Cliente:con_edi['Ident_Cliente'],
    Nom_cliente:con_edi['Nom_cliente'],
    Apel_Cliente:con_edi['Apel_Cliente'],
    Edad_Cliente:con_edi['Edad_Cliente'],
    Afiliado:con_edi['Afiliado']
  })
  }

}
