import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url='http://127.0.0.1:3000/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  //obtener todos
  recuperarTodos() {
    return this.http.get(`${this.url}getAll_cliente`);
  }

  //insertar
  alta(cliente:any):Observable<any> {
    return this.http.post(`${this.url}add_cliente`, cliente);    
  }
 
  //eliminar
  baja(codigo:number) {
    return this.http.delete(`${this.url}delete_cliente/${codigo}`);
  }

   //editar
  modificacion(cliente:any, id:number) {
    return this.http.put(`${this.url}/update_cliente/`+id, cliente);    
  } 
}
