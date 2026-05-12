import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/v1/libros/todos';
  // Antes (solo funciona en tu PC)

  private apiUrlGlobal = 'https://mi-api-tfg.onrender.com/api/v1/libros/todos';

  getLibros(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }



  getLibrosByTag(tag: string): Observable<any> {
    // Usamos encodeURIComponent para que los espacios y comas no rompan la URL
    const tagLimpio = encodeURIComponent(tag);
    return this.http.get<any>(`${this.apiUrl}/byTag/${tagLimpio}`);
  }
}
