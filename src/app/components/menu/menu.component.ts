import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu, IonMenuToggle,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {Router, RouterLink} from "@angular/router";
import {addIcons} from "ionicons";
import {gridOutline, homeOutline, informationCircleOutline, leaf, logOutOutline} from "ionicons/icons";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    RouterLink,
    IonMenuToggle
  ]
})
export class MenuComponent  implements OnInit {

  constructor(private router: Router) {
    addIcons({  homeOutline,  gridOutline, leaf,  informationCircleOutline, logOutOutline });
  }

  ngOnInit() {}

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/bienvenida']);
  }
}
