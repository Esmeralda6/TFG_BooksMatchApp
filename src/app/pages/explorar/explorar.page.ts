import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.page.html',
  styleUrls: ['./explorar.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ExplorarPage implements OnInit {

  categoriaSeleccionada: string = 'Todos';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Leemos el parámetro que viene de la URL
    const cat = this.route.snapshot.paramMap.get('categoria');

    if (cat) {
      this.categoriaSeleccionada = cat;
      this.filtrarLibros(cat); // Aquí llamarías a tu función de filtrar
    }
  }

  filtrarLibros(categoria: string) {
    console.log('Filtrando la lista de libros por:', categoria);
    // Aquí actualizas tu array de libros para que solo salgan los de esa categoría
  }

}
