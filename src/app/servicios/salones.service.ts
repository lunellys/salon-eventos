import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalonesService {

   url='http://127.0.0.1:3000/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  //obtener todos
  recuperarTodos() {
    return this.http.get(`${this.url}getAll_salon_evento`);
  }

  //insertar
  alta(salones:any):Observable<any> {
    return this.http.post(`${this.url}add_salon_evento`, salones);    
  }
 
  //eliminar
  baja(codigo:number) {
    return this.http.delete(`${this.url}delete_salon_evento/${codigo}`);
  }

   //editar
  modificacion(salones:any, id:number) {
    return this.http.put(`${this.url}/update_salon_evento/`+id, salones);    
  } 

}
