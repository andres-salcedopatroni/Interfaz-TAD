import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor() { }

  static categorias(): any {
    let c = [];
    c.push({ "nombre": "Tecnología", "urlImagen": "https://www.rubicon.com/wp-content/uploads/2021/06/bigstock-Solar-Panel-And-Wind-Turbine-F-306004318-scaled-1-1024x730.jpg"});
    c.push({ "nombre": "Higiene", "urlImagen": "https://images.surferseo.art/92a117d9-c2f3-473f-8e48-a49f0ae0e70c.jpeg"});
    c.push({ "nombre": "Alimento", "urlImagen": "https://greenamerica.org/sites/default/files/2017-06/elaine-casap-86020%20%281%29.jpg"});
    c.push({ "nombre": "Ropa", "urlImagen": "https://www.worldfashionexchange.com/blog/wp-content/uploads/2023/10/What-is-sustainable-fashion.webp"});
    c.push({ "nombre": "Otros", "urlImagen": "https://www.practicalbusinessskills.com/content/dam/financial-literacy/practical-business-skills/images/non-card/environment-sustainability.jpg"});
    return c;
  }
}
