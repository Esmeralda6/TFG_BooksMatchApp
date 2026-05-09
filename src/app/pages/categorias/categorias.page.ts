import {Component, inject, OnInit} from '@angular/core';
import { NavController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  colorPalette, desktop,
  extensionPuzzleOutline, laptop,
  musicalNotes,
  musicalNotesOutline,
  tvOutline,
  videocamOutline
} from 'ionicons/icons';
import {IonContent, IonIcon, IonMenuButton} from "@ionic/angular/standalone";
import {NavbarComponent} from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    NavbarComponent,
    IonIcon
  ],
})
export class CategoriasPage implements OnInit {

  ngOnInit() {
  }
  private navCtrl = inject(NavController);

  constructor() {
    addIcons({
      extensionPuzzleOutline,
      musicalNotesOutline,
      tvOutline,
      videocamOutline,
      colorPalette,
      musicalNotes,
      laptop,
      desktop
    });
  }

  navegarACategoria(nombre: string) {
    console.log('Filtrando por:', nombre);
    this.navCtrl.navigateForward(['/explorar', { categoria: nombre }]);  }
}
