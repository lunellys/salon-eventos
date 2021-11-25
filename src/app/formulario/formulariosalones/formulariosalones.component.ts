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
  constructor(private _builder:FormBuilder,private salones: SalonesService) { 
    this.myform=this._builder.group({
      Nom_Salon: ['', [Validators.required, Validators.maxLength(50)]]  ,
      Tam_Salon: ['', [Validators.required]]  ,
      Equ_Salin: ['', [Validators.required, Validators.maxLength(100)]] 
    })
  }
  lista_salones: any;
  nuevocon={
    Nom_Salon:null,
    Tam_Salon:null,
    Equ_Salin:null
  }
 
  ////// cuando carga el componente se activa ngonInit y llama el metodo  recuperartodos
  ngOnInit() {
    this.recuperarTodos();
  }

  /// este metodo llama al servicio que se llama recuperar todo que tiene la 
  //ruta para la api--> recuperar toto = getAll
  recuperarTodos() {
    this.salones.recuperarTodos().subscribe(result => this.lista_salones = result);
  }
  //este metodo carga los datos del formulario y llama al servicio con metodo alta
  // que tiene la ruta de agregar  alta=add_contact
  alta(value:any) {
    this.nuevocon={
      Nom_Salon:value.Nom_Salon,
      Tam_Salon:value.Tam_Salon,
      Equ_Salin:value.Equ_Salin
    }
    this.salones.alta(this.nuevocon).subscribe(datos => {
      console.log(datos)
      alert("salon agregado ")
      this.myform.reset()
      this.recuperarTodos()
     });
  }
  // este metodo obtiene el id del contacto a eliminar
  // llama el metodo baja del servicio  baja=delete/<id>
  baja(id:number) {
    if (window.confirm("Esta seguro de eliminar el registro Numero "+id+" ?")) {
      this.salones.baja(id).subscribe(datos => {
        console.log(datos)
        alert("salon eliminado ")
        this.myform.reset()
        this.recuperarTodos()
      });
    }

   
  }

  // este metodo obtiene el id del contacto a editar
  // llama el metodo baja del servicio  modificacion=update/<id>
  modificacion(value:any) {
    this.nuevocon={
      Nom_Salon:value.Nom_Salon,
      Tam_Salon:value.Tam_Salon,
      Equ_Salin:value.Equ_Salin
    }
    this.salones.modificacion(this.nuevocon,this.id_editar).subscribe(datos => {
      console.log(datos)
      alert("salon editado ")
      this.myform.reset()
      this.recuperarTodos()
    });    
  }
  
  //este metodo carga los datos de la fila al formulario
  seleccionar(con_edi:any) {
   this.id_editar=con_edi['Id_Salon'];
   this.myform.setValue({
    Nom_Salon:con_edi['Nom_Salon'],
    Tam_Salon:con_edi['Tam_Salon'],
    Equ_Salin:con_edi['Equ_Salin']
  })
  }

}
