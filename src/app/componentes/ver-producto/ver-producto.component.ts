import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css']
})
export class VerProductoComponent {

  producto:any;
  nombre:any;
  codigo_productor:any;

  constructor(private servicioProducto: ProductoService, private route: ActivatedRoute) { 
    
    this.nombre  = this.route.snapshot.paramMap.get('nombre');
    this.codigo_productor = this.route.snapshot.paramMap.get('codigo_productor');
    this.servicioProducto.obtenerProducto(this.nombre,this.codigo_productor).subscribe(
      (data)=> {
        this.producto=data;
      },
      (err)=> {
      }   
    );
  }

}
