import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalonesPrestadosService {

  url='http://127.0.0.1:3000/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  //obtener todos
  recuperarTodos() {
    return this.http.get(`${this.url}getAll_salonesPrestados`);
  }

  //insertar
  alta(salonP:any):Observable<any> {
    return this.http.post(`${this.url}add_salonesPrestados`, salonP);    
  }
 
  //eliminar
  baja(codigo:number) {
    return this.http.delete(`${this.url}delete_salonesPrestados/${codigo}`);
  }

   //editar
  modificacion(salonP:any, id:number) {
    return this.http.put(`${this.url}/update_salonesPrestados/`+id, salonP);    
  } 
}
