import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {NavbarComponent} from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-sostenibilidad',
  templateUrl: './sostenibilidad.page.html',
  styleUrls: ['./sostenibilidad.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NavbarComponent]
})
export class SostenibilidadPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
