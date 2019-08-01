import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { GuiaJudicialRoutingModule } from "./guiajudicial-routing.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListadoDependenciasComponent } from './Listado/listado-dependencias.component';
import { AbmDependenciaComponent } from './ABM/abm-dependencia.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';
import { EditIntegranteComponent } from './integrantes/edit-integrante/edit-integrante.component';


@NgModule({
    imports: [
        CommonModule,
        GuiaJudicialRoutingModule,
        NgxDatatableModule,
        NgbModule,
        FormsModule,    
        ReactiveFormsModule 
    ],
    declarations: [
        ListadoDependenciasComponent,
        AbmDependenciaComponent,
        IntegrantesComponent,
        EditIntegranteComponent,
     ]
})
export class GuiaJudicialModule { }
