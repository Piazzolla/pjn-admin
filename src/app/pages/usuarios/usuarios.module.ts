import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaUsuarioComponent } from './busqueda/busqueda.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ],
  declarations: [BusquedaUsuarioComponent]
})
export class UsuariosModule { }
