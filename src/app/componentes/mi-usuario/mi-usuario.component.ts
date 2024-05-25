import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { VentaService } from 'src/app/servicios/venta.service';

@Component({
  selector: 'app-mi-usuario',
  templateUrl: './mi-usuario.component.html',
  styleUrls: ['./mi-usuario.component.css']
})
export class MiUsuarioComponent {

  usuario:any=LoginService.usuarioObtener();
  misCompras:any;
  misVentas:any;
  productos:any;
  

  constructor(private servicioUsuario: UsuarioService, private servicioVenta: VentaService, private router:Router, private servicioProducto: ProductoService) { 
    this.servicioVenta.obtenerMisCompras(this.usuario.dni_ruc).subscribe(
      (data)=> {
        this.misCompras=data;
      },(err)=> {
      }   
    );
    this.servicioVenta.obtenerMisVentas(this.usuario.dni_ruc).subscribe(
      (data)=> {
        this.misVentas=data;
      },(err)=> {
      }   
    )
    this.servicioProducto.obtenerListaProductos(this.usuario.dni_ruc).subscribe(
      (data)=> {
        this.productos=data;
      },
      (err)=> {
      }   
    );
  }

  modificarUsuario(): void{
    this.router.navigate(['modificar-usuario']);
  }

  eliminarUsuario(): void{
    this.servicioUsuario.eliminarUsuario(this.usuario).subscribe(
      (data)=> {
        LoginService.salir();
        this.router.navigate(['']);
      },(err)=> {
      }   
    )
  }

  registrarProducto(): void{
    this.router.navigate(['agregar-producto']);
  }

  verProducto(nombre:any, codigo_productor:any): void {
    if(LoginService.usuarioObtener() && LoginService.usuarioObtener().dni_ruc == codigo_productor)
      this.router.navigate(['mi-producto/'+codigo_productor+'/'+nombre]);
    else
      this.router.navigate(['ver-producto/'+codigo_productor+'/'+nombre]);
  }

}
