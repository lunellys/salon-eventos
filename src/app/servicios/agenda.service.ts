import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  url='http://127.0.0.1:3000/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  //obtener todos
  recuperarTodos() {
    return this.http.get(`${this.url}getAll_agenda`);
  }

  //insertar
  alta(contacto:any):Observable<any> {
    return this.http.post(`${this.url}add_agenda`, contacto);    
  }
 
  //eliminar
  baja(codigo:number) {
    return this.http.delete(`${this.url}delete_agenda/${codigo}`);
  }

   //editar
  modificacion(contacto:any, id:number) {
    return this.http.put(`${this.url}/update_agenda/`+id, contacto);    
  } 

}
