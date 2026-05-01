import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { compassOutline, libraryOutline, menuOutline, person, sparklesOutline } from "ionicons/icons";
import { addIcons } from "ionicons";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { UserService } from "../../service/user-service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonButton, IonButtons, IonBackButton]
})
export class PerfilPage implements OnInit {

  // 1. Declaramos la variable
  nombreUsuario: string = '';

  constructor(private userService: UserService) {
    addIcons({ menuOutline, libraryOutline, compassOutline, sparklesOutline, person });
  }

  ngOnInit() {
    // 2. Asignamos el valor dentro de ngOnInit para que se ejecute al cargar
    this.nombreUsuario = this.userService.getUserName();
  }
}
