export interface Libro {
  _id: string;
  titulo: string;
  autor: string;
  genero: string;
  categoria: string;
  tags: string[];
  precio: {
    fisico: number;
    eBook: number;
    _id?: string;
  };
  idioma: string;
  fechaPublicacion: string;
  editorial: string;
  valoracion: {
    rating: number;
    _id?: string;
  };
  numPaginas: number;
  imagen: string;
  disponible: boolean;
  descripcion: string;
  matchScore?: number;
}

export interface ApiResponse {
  status: boolean;
  message: string;
  data: Libro[];
}
