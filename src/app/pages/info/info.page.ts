import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButton, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {
  book,
  chevronBackOutline,
  colorPalette,
  musicalNotesOutline,
  sparkles,
  tvOutline,
  videocamOutline
} from "ionicons/icons";
import {Router} from "@angular/router";
import {NavbarComponent} from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, NavbarComponent, IonIcon, IonButton]
})
export class InfoPage implements OnInit {

  constructor(private router:Router) {addIcons({chevronBackOutline,
    sparkles,
    colorPalette,
    musicalNotesOutline,
    videocamOutline,
    book,
    tvOutline}) }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/categorias']);
  }
}
