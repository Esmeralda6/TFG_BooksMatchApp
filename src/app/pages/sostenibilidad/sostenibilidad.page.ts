import {Component, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton, IonButtons,
  IonContent, IonFab,
  IonFabButton,
  IonHeader,
  IonIcon, IonInput, IonItem, IonLabel, IonModal,
  IonSearchbar, IonSelect, IonSelectOption,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {
  add,
  addCircle,
  addCircleOutline,
  cameraOutline,
  menuOutline,
  personOutline,
  searchOutline
} from "ionicons/icons";
import {addIcons} from "ionicons";
import {FiltoPipePipe} from "../../pipes/filto-pipe-pipe";

@Component({
  selector: 'app-sostenibilidad',
  templateUrl: './sostenibilidad.page.html',
  styleUrls: ['./sostenibilidad.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, NavbarComponent, IonSearchbar, IonIcon, IonFabButton, IonFab, FiltoPipePipe, IonLabel, IonButton, IonInput, IonItem, IonSelect, IonSelectOption, IonModal, IonHeader, IonToolbar, IonTitle, IonButtons]
})
export class SostenibilidadPage implements OnInit {

  constructor() { addIcons({menuOutline, searchOutline, addCircle, personOutline, add, cameraOutline
  })}

  searchTerm: string = '';
  categoryActive: string = 'Todos';

  cambiarCategoria(nombre: string) {
    this.categoryActive = nombre;
  }

  categories = [
    { name: 'Todos', active: true, color: 'primary' },
    { name: 'Ficción', active: false, color: 'secondary' },
    { name: 'Clásicos', active: false, color: 'tertiary' },
    { name: 'Juvenil', active: false, color: 'secondary' },
    { name: 'Estado Impecable', active: false, color: 'tertiary', icon: 'stars' }
  ];

  books = [
    {
      title: 'Farsa del amor a la española',
      author: 'Elena Armas',
      category: 'Juvenil',
      price: '12,50€',
      location: 'Madrid',
      seller: 'Elena M.',
      img: 'assets/images/española.jpg'
    },
    {
      title: 'Orgullo y Prejuicio',
      author: 'Jane Austen',
      category: 'Clásicos',
      price: '20,00€',
      location: 'Barcelona',
      seller: 'Julián R.',
      img: 'assets/images/pride.jpg'
    },
    {
      title: 'Culpa Mía',
      author: 'Mercedes Ron',
      category: 'Juvenil',
      price: '6,00€',
      location: 'Valencia',
      seller: 'Valeria C.',
      img: 'assets/images/culpa.jpg'
    }
  ];

  ngOnInit() {
  }

  @ViewChild(IonModal) modal!: IonModal;

  // Objeto para vincular el formulario
  nuevoLibro = {
    title: '',
    author: '',
    price: '',
    category: '',
    location: '',
    img: ''
  };



  cerrarModal() {
    this.modal.dismiss();
  }

  seleccionarFoto() {
    // Aquí iría la lógica de Capacitor Camera
    // Por ahora simulamos una carga
    this.nuevoLibro.img = 'https://via.placeholder.com/300x450.png?text=Portada+Subida';
  }

  publicarLibro() {
    if (this.nuevoLibro.title && this.nuevoLibro.price) {
      // 1. Añadimos el libro a nuestra lista local (en un caso real, iría al backend NestJS)
      this.books.unshift({
        ...this.nuevoLibro,
        seller: 'Yo', // O el nombre del servicio de usuario
        price: this.nuevoLibro.price + '€'
      });

      // 2. Limpiamos y cerramos
      this.cerrarModal();
      this.nuevoLibro = { title: '', author: '', price: '', category: '', location: '', img: '' };
      console.log('Libro publicado con éxito');
    }
  }
}
