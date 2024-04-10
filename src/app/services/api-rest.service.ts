
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  URL = environment.api

  constructor(private http: HttpClient) { }

  getCiudades():Observable<any>{
    return this.http.get<any>(`${this.URL}consultas/consulta`);
  }

  getCountries(): Observable<any> {

    return this.http.get("//fakestoreapi.com/products");
  }

  // getValorRecuperado(params:{anio:any, mes:any, asesor:any}):Observable<{resp: Vrecuperado}>{
  //   return this.http.get<any>(`${this.URL}operativos/recaudo/${HttpUtilities.toQueryParams(params)}`)
  // }
}
