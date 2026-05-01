import { Component, OnInit } from '@angular/core';
import {
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar
} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";

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
        RouterLink
    ]
})
export class MenuComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
