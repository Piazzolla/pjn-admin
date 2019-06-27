import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AvisosRoutingModule } from "./avisos-routing.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListadoAvisosComponent } from './listado/listado-avisos.component';

import { AbmAvisosComponent } from './ABM/mod-avisos.component';
import { AltaAvisosComponent } from './ABM/alta-avisos.component';

@NgModule({
    imports: [
        CommonModule,
        AvisosRoutingModule,
        NgxDatatableModule,
        NgbModule,
        FormsModule,    
        ReactiveFormsModule 
    ],
  declarations: [
	ListadoAvisosComponent,
     AbmAvisosComponent,
     AltaAvisosComponent,
  ]
})
export class AvisosModule { }
