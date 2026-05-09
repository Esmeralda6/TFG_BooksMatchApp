import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DataService } from '../../service/data-service';
import {NavbarComponent} from "../../components/navbar/navbar.component";
@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.page.html',
  styleUrls: ['./explorar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NavbarComponent]
})
export class ExplorarPage implements OnInit {
  private route = inject(ActivatedRoute);
  private readonly dataService= inject(DataService);

  categoriaSeleccionada: string | null = null;
  busquedaUsuario: string = '';

  librosBase: any[] = [];
  librosMostrados: any[] = [];

  misIntereses = ['rock', 'acuarela', 'guitarra', 'biografias', 'ajedrez'];

  ngOnInit() {
    this.categoriaSeleccionada = this.route.snapshot.paramMap.get('categoria');
    this.cargarDatos();
  }

  cargarDatos() {
    this.dataService.getLibros().subscribe({
      next: (res: any) => {
        const librosReales = res.data;

        let filtrados = librosReales;
        if (this.categoriaSeleccionada) {
          filtrados = librosReales.filter((l: any) =>
            l.categoria.toLowerCase() === this.categoriaSeleccionada?.toLowerCase()
          );
        }

        const librosConMatch = this.aplicarMatchScore(filtrados, this.misIntereses);

        this.librosBase = librosConMatch; // Guardamos los datos
        this.librosMostrados = [];        // Pero dejamos la "pantalla" vacía
      },
      error: (err) => console.error('Error:', err)
    });
  }

  ejecutarBusqueda() {
    const termino = this.busquedaUsuario.toLowerCase().trim();

    // Si el usuario borra lo que escribió, vaciamos la pantalla otra vez
    if (!termino) {
      this.librosMostrados = [];
      return;
    }

    this.librosMostrados = this.librosBase.filter(libro =>
      libro.tags.some((tag: string) =>
        tag.toLowerCase().includes(termino)
      )
    );
  }

  aplicarMatchScore(libros: any[], intereses: string[]) {
    return libros.map(libro => {
      const tagsLibro = libro.tags || [];
      const score = tagsLibro.filter((tag: string) =>
        intereses.some(interes => tag.toLowerCase().includes(interes.toLowerCase()))
      ).length;

      return { ...libro, matchScore: score };
    }).sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0));
  }

  toggleLibro(libro: any) {
    // Si estaba abierto se cierra, si estaba cerrado se abre
    libro.expandido = !libro.expandido;
  }

  irALaCasaDelLibro(libro: any) {
    if (libro.urlCompra) {
      window.open(libro.urlCompra, '_blank');
    } else {
      // Plan B: Si por algún motivo no hay link, que use el buscador automático
      const query = encodeURIComponent(`${libro.titulo} ${libro.autor}`);
      window.open(`https://www.casadellibro.com/busqueda/generica?busqueda=${query}`, '_blank');
    }
  }
}
