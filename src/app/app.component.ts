import { Component } from '@angular/core';
import {
  IonApp,
  IonContent,
  IonHeader, IonIcon, IonItem, IonLabel,
  IonList,
  IonMenu,
  IonRouterOutlet,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";
import {addIcons} from "ionicons";
import {
  bookOutline,
  compassOutline,
  gridOutline,
  homeOutline, informationCircleOutline, leaf,
  libraryOutline,
  star,
  starHalf,
  starOutline
} from "ionicons/icons";
import {MenuComponent} from "./components/menu/menu.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [RouterLink, IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonIcon, IonItem, IonLabel, MenuComponent],
})
export class AppComponent {
  constructor() {
    addIcons({homeOutline,leaf,informationCircleOutline ,gridOutline, bookOutline, compassOutline, libraryOutline, star, starOutline, starHalf});
  }
}
