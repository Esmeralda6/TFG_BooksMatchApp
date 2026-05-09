import { Component, OnInit } from '@angular/core';
import {IonAvatar, IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar} from "@ionic/angular/standalone";
import {Input} from "postcss";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [
    IonHeader,
    IonButtons,
    IonToolbar,
    IonMenuButton,
    IonTitle,
    RouterLink
  ]
})
export class NavbarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
}
