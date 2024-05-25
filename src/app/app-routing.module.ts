import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarUsuarioComponent } from './componentes/agregar-usuario/agregar-usuario.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ModificarUsuarioComponent } from './componentes/modificar-usuario/modificar-usuario.component';
import { LoginComponent } from './componentes/login/login.component';
import { MiUsuarioComponent } from './componentes/mi-usuario/mi-usuario.component';
import { AgregarProductoComponent } from './componentes/agregar-producto/agregar-producto.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { VerUsuarioComponent } from './componentes/ver-usuario/ver-usuario.component';
import { MiProductoComponent } from './componentes/mi-producto/mi-producto.component';
import { VerProductoComponent } from './componentes/ver-producto/ver-producto.component';
import { ModificarProductoComponent } from './componentes/modificar-producto/modificar-producto.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'agregar-usuario', component: AgregarUsuarioComponent },
  { path: 'agregar-producto', component: AgregarProductoComponent },
  { path: 'mi-usuario', component: MiUsuarioComponent },
  { path: 'ver-usuario/:dni_ruc', component: VerUsuarioComponent },
  { path: 'mi-producto/:codigo_productor/:nombre', component: MiProductoComponent },
  { path: 'ver-producto/:codigo_productor/:nombre', component: VerProductoComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'modificar-usuario', component: ModificarUsuarioComponent},
  { path: 'modificar-producto/:codigo_productor/:nombre', component: ModificarProductoComponent },
  { path: '**', component: PrincipalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }