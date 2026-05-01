import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle,
  IonContent,
  IonHeader, IonIcon,
  IonInput,
  IonItem,
  IonLabel, IonSelect, IonSelectOption,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {Router} from "@angular/router";
import {ToastController} from "@ionic/angular";
import {UserService} from "../../service/user-service";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonButton, IonInput, IonItem, IonIcon]
})
export class RegisterPage implements OnInit {

  constructor(private router: Router, private toast: ToastController, private userService: UserService) { }

  ngOnInit() {}

  name: string = '';
  email: string = '';
  pass: string = '';
  confirmPass: string = '';

  async signUp() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const namePattern = /^[a-zA-Z ]+$/;

    // Validaciones
    if (!namePattern.test(this.name)) {
      this.mostrarError('El nombre solo debe contener letras');
      return;
    }

    if (!emailPattern.test(this.email)) {
      this.mostrarError('Email no válido');
      return;
    }

    if (this.pass.length < 8) {
      this.mostrarError('La contraseña requiere 8 caracteres');
      return;
    }

    if (this.pass !== this.confirmPass) {
      this.mostrarError('Las contraseñas no coinciden');
      return;
    }

    // --- EL CAMBIO ESTÁ AQUÍ ---
    // Guardamos 'this.name', que es el valor de la variable vinculada al input
    this.userService.setUserName(this.name);

    // Una sola redirección (elige a dónde quieres que vaya el usuario al registrarse)
    this.router.navigate(['/inicio']);
  }

  async mostrarError(msg: string) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000,
      color: 'danger',
      position: 'top',
      mode: 'ios'
    });
    toast.present();
  }
}
