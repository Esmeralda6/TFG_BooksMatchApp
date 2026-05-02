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
}
