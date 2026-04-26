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

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonButton, IonInput, IonItem, IonIcon]
})
export class RegisterPage implements OnInit {

  constructor(private router: Router, private toast: ToastController) { }

  ngOnInit() {} // No olvides añadir el OnInit si implementas la interfaz

  name: string = '';
  email: string = '';
  pass: string = '';
  confirmPass: string = '';

  async signUp() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const namePattern = /^[a-zA-Z ]+$/;

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

    this.router.navigate(['/inicio']);
  }

  // --- AÑADE ESTA FUNCIÓN AQUÍ ABAJO ---
  async mostrarError(msg: string) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000,
      color: 'danger',
      position: 'top',
      mode: 'ios' // Para que se vea bonito y redondeado como tu diseño
    });
    toast.present();
  }
}
