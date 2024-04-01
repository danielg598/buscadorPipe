import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscador',
  standalone: true
})
export class BuscadorPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPost = [];
    if (value && Array.isArray(value)) {
      for(const post of value){
        const nombre = post.nombre || '';
        const capital = post.capital || ''; // Si es nulo o indefinido, asigna una cadena vacía
        if (nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
          resultPost.push(post);
        }else if(capital.toLowerCase().indexOf(arg.toLowerCase()) > -1){
          resultPost.push(post);
        }
      }
    }

    return resultPost;
  }

}
