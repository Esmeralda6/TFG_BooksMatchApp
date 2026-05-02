import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtoPipe'
})
export class FiltoPipePipe implements PipeTransform {

  transform(books: any[], searchTerm: string, selectedCategory: string): any[] {
    if (!books) return [];

    return books.filter(book => {
      // 1. Filtro de Categoría:
      // Si la categoría es 'Todos', pasa el filtro. Si no, debe coincidir exactamente.
      const matchesCategory = selectedCategory === 'Todos' || book.category === selectedCategory;

      // 2. Filtro de Texto:
      // Si no hay texto, pasa el filtro. Si hay, busca en título o autor.
      const search = searchTerm.toLowerCase().trim();
      const matchesSearch = search === '' ||
        book.title.toLowerCase().includes(search) ||
        book.author.toLowerCase().includes(search);

      // Solo mostramos el libro si cumple AMBAS condiciones
      return matchesCategory && matchesSearch;
    });
  }

}
