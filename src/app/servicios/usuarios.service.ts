import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {  
  private apiURL = 'http://127.0.0.1:8000/api/v1/usuarios';
  
  constructor(private http: HttpClient) { }
  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }

  register(usuario: any): Observable<any> {
    return this.http.post(`${this.apiURL}/`, usuario);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiURL}/`, credentials);
  }

}
