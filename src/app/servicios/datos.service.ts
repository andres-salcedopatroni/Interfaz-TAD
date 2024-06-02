import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor() { }

  static categorias(): any {
    let c = [];
    c.push({ "nombre": "Tecnología", "urlImagen": "imagen"});
    c.push({ "nombre": "Higiene", "urlImagen": "imagen"});
    c.push({ "nombre": "Alimento", "urlImagen": "imagen"});
    c.push({ "nombre": "Ropa", "urlImagen": "imagen"});
    c.push({ "nombre": "Otros", "urlImagen": "imagen"});
    return c;
  }
}
