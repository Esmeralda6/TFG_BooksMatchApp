import {Component, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon, IonInput, IonItem, IonLabel, IonList, IonModal, IonSelect, IonSelectOption, IonThumbnail,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {camera, compassOutline, libraryOutline, menuOutline, person, sparklesOutline} from "ionicons/icons";
import { addIcons } from "ionicons";
import { UserService } from "../../service/user-service";
import {Camera, CameraResultType, CameraSource} from "@capacitor/camera";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonButton, IonButtons, IonBackButton, IonModal, IonSelect, IonSelectOption, IonItem, IonInput, IonLabel, IonThumbnail, IonList]
})
export class PerfilPage implements OnInit {

  //Declaramos la variable
  nombreUsuario: string = '';

  editando = false;
  usuario:any;

  constructor(private userService: UserService) {
    addIcons({ menuOutline, libraryOutline, compassOutline, sparklesOutline, person, camera });
  }

  ngOnInit() {
    // 2. Asignamos el valor dentro de ngOnInit para que se ejecute al cargar
    this.usuario = {...this.userService.usuario};
    this.cargarPedidos();
  }

  books = [
    { title: 'MALDITA FORTUNA', author: 'Myriam M. Lejardi', img: 'https://imagessl8.casadellibro.com/a/l/s7/98/9788408314998.webp' },
    { title: 'Si fueramos eternos', author: 'Emma Gil', img: 'https://imagessl2.casadellibro.com/a/l/s7/22/9788427054622.webp' },
    { title: 'La Asistenta', author: 'Freida McFadden', img: 'https://imagessl3.casadellibro.com/a/l/s7/83/9788491294283.webp' },
    { title: 'UN OTOÑO EN BRAMBLE FALLS', author: 'Misty Wilson', img: 'https://imagessl3.casadellibro.com/a/l/s7/73/9788419975973.webp' },
    { title: 'Antes de Diciembre', author: 'Joana Marcús', img: 'https://imagessl8.casadellibro.com/a/l/s7/48/9788418483448.webp' },
    { title: 'Hija de la Tierra', author: 'Andrea Longarela', img: 'https://imagessl2.casadellibro.com/a/l/s7/02/9788419507402.webp' },
    { title: 'Alas de estrella', author: 'Disney y Allison Saft', img: 'https://imagessl4.casadellibro.com/a/l/s7/74/9791387526474.webp' },
    { title: 'Solo donde estés tú', author: 'Javier Arias Artacho', img: 'https://imagessl7.casadellibro.com/a/l/s7/77/9788414016077.webp' },
    { title: 'Cuando no queden más estrellas que contar', author: 'María Martínez', img: 'https://imagessl2.casadellibro.com/a/l/s7/72/9788408245872.webp' },
    { title: 'Asesinato para principiantes', author: 'Holly Jackson', img: 'https://imagessl7.casadellibro.com/a/l/s7/87/9788408282587.webp' }
  ];

  @ViewChild(IonModal) modal!: IonModal;


  // Datos del usuario (esto vendría de tu API)
  /*usuario = {
    nombre: 'Usuario',
    tagline: 'En busca de la página perfecta.',
    rango: 'Lector Premium - Oro',
    foto: 'assets/images/avatarbm.png'
  };*/

  // Opciones de rango para el selector
  rangos = ['Lector Novato', 'Lector Voraz', 'Lector Premium - Oro', 'Maestro de lo Clásico'];

  toggleEdicion() {
    this.editando = !this.editando;
    if (!this.editando) {
      // Si cancelamos, volvemos a cargar los datos originales del servicio
      this.usuario = { ...this.userService.usuario };
    }
  }

  guardarCambios() {
    this.editando = false;
    // Aquí harías el PATCH a tu API de NestJS
    this.userService.actualizarPerfil(this.usuario)
    console.log('Guardando...', this.usuario);
  }

  async cambiarFoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Photos
      });

      if (image.webPath) {
        this.usuario.foto = image.webPath;
      }
    } catch (error) {
      console.log('El usuario canceló la selección de foto');
    }
  }


  misPedidos: any[] = [];


  // Cada vez que el usuario entre a la pestaña de perfil, refrescamos la lista
  ionViewWillEnter() {
    this.cargarPedidos();
  }

  cargarPedidos() {
    const datos = localStorage.getItem('mis_pedidos');
    if (datos) {
      this.misPedidos = JSON.parse(datos);
    }
  }
}
