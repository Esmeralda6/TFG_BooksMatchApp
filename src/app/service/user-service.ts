import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userName: string = 'Nombre de Usuario';

  setUserName(name: string) {
    this.userName = name;
  }

  getUserName(): string {
    return this.userName;
  }

  public usuario = {
    nombre: 'El Curator',
    tagline: 'En busca de la página perfecta.',
    foto: 'assets/images/user.jpeg',
    rango: 'Lector Premium - Oro'
  };

  constructor() {
    // Al iniciar, intentamos cargar lo que haya en la memoria
    const guardado = localStorage.getItem('perfil_usuario');
    if (guardado) {
      this.usuario = JSON.parse(guardado);
    }
  }

  // Función para guardar los cambios en la memoria permanente
  actualizarPerfil(nuevosDatos: any) {
    this.usuario = { ...nuevosDatos };
    localStorage.setItem('perfil_usuario', JSON.stringify(this.usuario));
  }
}
