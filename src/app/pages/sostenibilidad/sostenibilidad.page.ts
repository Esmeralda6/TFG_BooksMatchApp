import {Component, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton, IonButtons,
  IonContent, IonFab,
  IonFabButton,
  IonHeader,
  IonIcon, IonInput, IonItem, IonLabel, IonModal,
  IonSearchbar, IonSelect, IonSelectOption, IonSpinner,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {
  add,
  addCircle,
  addCircleOutline,
  cameraOutline, cardOutline, closeOutline, locationOutline, lockClosedOutline,
  menuOutline, personCircleOutline,
  personOutline,
  searchOutline, shieldCheckmarkOutline, trashOutline, searchCircle,
} from "ionicons/icons";
import {addIcons} from "ionicons";
import {FiltoPipePipe} from "../../pipes/filto-pipe-pipe";
import {Camera, CameraResultType, CameraSource} from "@capacitor/camera";
import {ToastService} from "../../service/toast-service";

@Component({
  selector: 'app-sostenibilidad',
  templateUrl: './sostenibilidad.page.html',
  styleUrls: ['./sostenibilidad.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, NavbarComponent, IonSearchbar, IonIcon, IonFabButton, IonFab, FiltoPipePipe, IonLabel, IonButton, IonInput, IonItem, IonSelect, IonSelectOption, IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonSpinner]
})
export class SostenibilidadPage implements OnInit {

  constructor(private toastService: ToastService) { addIcons({menuOutline,trashOutline, searchOutline, addCircle, personOutline, add, cameraOutline,
    closeOutline, locationOutline, shieldCheckmarkOutline, cardOutline, personCircleOutline, lockClosedOutline
  })}

  searchTerm: string = '';
  categoryActive: string = 'Todos';

  cambiarCategoria(nombre: string) {
    this.categoryActive = nombre;
  }

  categories = [
    { name: 'Todos', active: true, color: 'primary' },
    { name: 'Ficción', active: false, color: 'primary' },
    { name: 'Clásicos', active: false, color: 'primary' },
    { name: 'Juvenil', active: false, color: 'primary' },
    //{ name: 'Estado Impecable', active: false, color: 'tertiary', icon: 'stars' }
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
    },
    {
      title: 'En llamas',
      author: 'Suzanne Collins',
      category: 'Ficción',
      price: '10,00€',
      location: 'Valencia',
      seller: 'Lyla R.',
      img: 'assets/images/llamas.jpg'
    },
    {
      title: ' Ana de las tejas verdes',
      author: 'Lucy Maud Montgomery',
      category: 'Clásico',
      price: '5,50€',
      location: 'Madrid',
      seller: 'Paula F.',
      img: 'assets/images/ana.jpg'
    },
    {
      title: 'A dos metros de ti',
      author: 'Rachel Lippincott',
      category: 'Juvenil',
      price: '7,00€',
      location: 'Barcelona',
      seller: 'Clara C.',
      img: 'assets/images/2m.jpg'
    },
    {
      title: 'Bas Ash',
      author: 'Alina Not',
      category: 'Juvenil',
      price: '10,00€',
      location: 'Cáceres',
      seller: 'Elena G.',
      img: 'assets/images/bad.jpg'
    },
    {
      title: 'Boulevard',
      author: 'Flor R. Salvador',
      category: 'Juvenil',
      price: '3,50€',
      location: 'Valencia',
      seller: 'Irene S.',
      img: 'assets/images/boulevard.jpg'
    },
    {
      title: ' Divergente',
      author: 'Veronica Roth',
      category: 'Ficción',
      price: '7,00€',
      location: 'Bilbao',
      seller: 'Maialen M.',
      img: 'assets/images/divergente.jpg'
    },
    {
      title: 'Romper el hielo',
      author: 'Hannah Grace',
      category: 'Juvenil',
      price: '2,00€',
      location: 'Castellón',
      seller: 'Mar C.',
      img: 'assets/images/hielo.jpg'
    },
    {
      title: 'Marina',
      author: 'Carlos Ruiz Zafón',
      category: 'Clásicos',
      price: '8,50€',
      location: 'Alicante',
      seller: 'Tomás C.',
      img: 'assets/images/marina.jpg'
    },
    {
      title: 'El verano en que me enamoré',
      author: 'Jenny Han',
      category: 'Juvenil',
      price: '5,50€',
      location: 'Valencia',
      seller: 'Laia C.',
      img: 'assets/images/verano.jpg'
    },
    {
      title: 'The pumkin spice cafe',
      author: 'Alex Mírez',
      category: 'Juvenil',
      price: '4,00€',
      location: 'Valencia',
      seller: 'Leire C.',
      img: 'assets/images/calabaza.jpg'
    },
    {
      title: 'Imperfectas Navidades',
      author: 'Cherry Chic',
      category: 'Juvenil',
      price: '7,00€',
      location: 'Córdoba',
      seller: 'Jaime C.',
      img: 'assets/images/christmas.jpg'
    },
    {
      title: 'Un cuento perfecto',
      author: 'Elisabet Benavent',
      category: 'Juvenil',
      price: '3,00€',
      location: 'Cuenca',
      seller: 'Tom L.',
      img: 'assets/images/cuento.jpg'
    },
    {
      title: 'Jaque mate al amor',
      author: 'Ali Hazelwood',
      category: 'Juvenil',
      price: '3,99€',
      location: 'Sevilla',
      seller: 'Alicia C.',
      img: 'assets/images/jaque.jpg'
    },
    {
      title: 'Perfectos Mentirosos',
      author: 'Alex Mírez',
      category: 'Juvenil',
      price: '4,00€',
      location: 'Murcia',
      seller: 'Vicky C.',
      img: 'assets/images/liar.jpg'
    },
    {
      title: 'Magnolia Parks',
      author: 'Jessa Hastings',
      category: 'Juvenil',
      price: '7,00€',
      location: 'Valencia',
      seller: 'Leire S.',
      img: 'assets/images/magnolia.jpg'
    },
    {
      title: 'Cuentos de Buenas Noches para niñas rebeldes',
      author: 'Elena Favilli y Francesca Cavallo',
      category: 'Clásicos',
      price: '10,00€',
      location: 'Valencia',
      seller: 'Judith M.',
      img: 'assets/images/niñas.jpg'
    },
    {
      title: 'La Selección',
      author: 'Kiera Cass',
      category: 'Juvenil',
      price: '4,00€',
      location: 'Alicante',
      seller: 'Nerea T.',
      img: 'assets/images/seleccion.jpg'
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

  async seleccionarFoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        // Aquí forzamos que abra la GALERÍA.
        source: CameraSource.Photos,
        resultType: CameraResultType.DataUrl // Esto nos da una URL que el <img> entiende
      });

      // Guardamos la imagen real seleccionada
      if (image.dataUrl) {
        this.nuevoLibro.img = image.dataUrl;
      }
    } catch (error) {
      console.log('El usuario canceló la selección o hubo un error', error);
    }
  }

  publicarLibro() {
    if (this.nuevoLibro.title && this.nuevoLibro.price) {
      const libroNuevo = {
        ...this.nuevoLibro,
        seller: 'Yo',
        price: this.nuevoLibro.price + '€'
      };

      this.books = [libroNuevo, ...this.books];

      //  Limpia los filtros para que el libro no quede oculto
      this.searchTerm = '';
      this.categoryActive = 'Todos';

      this.cerrarModal();

      this.nuevoLibro = { title: '', author: '', price: '', category: '', location: '', img: '' };
    }
  }
  borrarLibro(titulo: string) {
    this.books = this.books.filter(b => b.title !== titulo);
  }

  @ViewChild('modalDetalle') modalDetalle!: IonModal;

  libroSeleccionado: any = null;



  abrirDetalle(book: any) {
    this.libroSeleccionado = book;
    this.modalDetalle.present();
  }

  @ViewChild('modalProcesando') modalProcesando!: IonModal; // <--- Añade esto

  @ViewChild('modalPasarela') modalPasarela!: IonModal;
  cargando: boolean = false;

// 1. Este es el botón de "Comprar ahora" del primer modal
  /*async pagarConStripe() {
    this.modalDetalle.dismiss(); // Cierra el detalle
    setTimeout(() => {
      this.modalPasarela.present(); // Abre la tarjeta
    }, 300);
  }*/

// 2. Este es el botón de "Pagar ahora" de la tarjeta
  // 1. Al pulsar "Comprar ahora" en el detalle, abrimos la TARJETA
  async pagarConStripe() {
    await this.modalDetalle.dismiss();
    setTimeout(() => {
      this.modalPasarela.present();
    }, 300);
  }

// 2. Al pulsar "Pagar ahora" en la tarjeta, abrimos el PROCESANDO (el banco)
  async procesarTransaccion() {
    // 1. Cerramos la pasarela de tarjeta
    await this.modalPasarela.dismiss();

    // 2. Abrimos el modal de "Conectando con el banco"
    setTimeout(() => {
      this.modalProcesando.present();
    }, 300);

    // 3. Simulación del proceso bancario y guardado de datos
    setTimeout(async () => {
      // --- LÓGICA DE GUARDADO EN PERFIL ---
      if (this.libroSeleccionado) {
        // Obtenemos pedidos anteriores o creamos array vacío
        const pedidosActuales = JSON.parse(localStorage.getItem('mis_pedidos') || '[]');

        // Creamos el objeto del nuevo pedido
        const nuevoPedido = {
          titulo: this.libroSeleccionado.title,
          precio: this.libroSeleccionado.price,
          img: this.libroSeleccionado.img,
          fecha: new Date().toLocaleDateString(),
          estado: 'Pendiente de envío'
        };

        // Guardamos en el almacenamiento local
        pedidosActuales.push(nuevoPedido);
        localStorage.setItem('mis_pedidos', JSON.stringify(pedidosActuales));

        // Borramos el libro de la tienda para que no se pueda comprar dos veces
        this.borrarLibro(this.libroSeleccionado.title);
      }
      // ------------------------------------

      // 4. Cerramos el modal de carga y avisamos al usuario
      await this.modalProcesando.dismiss();
      this.toastService.showSuccess('¡Pago verificado! El libro se ha añadido a tu perfil.');

      // Limpiamos la selección
      this.libroSeleccionado = null;
    }, 2500);
  }
}
