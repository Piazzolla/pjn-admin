import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DependenciaIntegrantesService {

  private url = "http://localhost:8081/api/avisos/";

  constructor(protected http: HttpClient) { }


    public findAll(): Observable<any>  {
    return this.http.get<any>(this.url+"all");
  }

    public findId(id:any): Observable<any>  {
    return this.http.get<any>(this.url+id);
  }


}
