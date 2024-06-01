import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-categoria-producto',
  templateUrl: './categoria-producto.component.html',
  styleUrls: ['./categoria-producto.component.css']
})
export class CategoriaProductoComponent {

  categoria: string | null;

  constructor(private route: ActivatedRoute, private servicioProducto: ProductoService){
    this.categoria = this.route.snapshot.paramMap.get('categoria');
  }

}
