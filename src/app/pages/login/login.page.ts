import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import {IonButton, IonContent, IonIcon, IonInput, IonItem} from "@ionic/angular/standalone";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone : true,
  imports: [
    IonButton,
    IonInput,
    IonIcon,
    IonItem,
    IonContent,
    FormsModule,
  ]
})
export class LoginPage {
  email: string = '';
  pass: string = '';

  constructor(private router: Router, private toast: ToastController) {}

  async irAInicio() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(this.email)) {
      this.mostrarError('Por favor, introduce un correo electrónico válido');
      return;
    }

    if (this.pass.length < 8) {
      this.mostrarError('La contraseña debe tener al menos 8 caracteres');
      return;
    }

    // Si pasa las dos pruebas...
    this.router.navigate(['/inicio']);
  }

  async mostrarError(msg: string) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000,
      color: 'danger',
      position: 'top'
    });
    toast.present();
  }
}
