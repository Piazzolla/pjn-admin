import { Component } from '@angular/core';
import { DataService } from '../../../services/data.services';
import { Router, Route,ActivatedRoute, ParamMap  } from '@angular/router';
import swal from 'sweetalert2';
import { AuthService } from '../../../shared/auth/auth.service';
import { hexToRgb } from '@swimlane/ngx-charts/release/utils';
import { FormControl, FormGroup, FormBuilder, Validator, Validators,ReactiveFormsModule } from "@angular/forms";
import { Aviso } from '../../../models/aviso.model';

declare var require: any;
// const data: any = require('../../../shared/data/company.json');
// shared/data/company.json
@Component({
    selector: 'alta-avisos',
    templateUrl: './alta-avisos.component.html',
    styleUrls: ['./alta-avisos.component.scss']
})

export class AltaAvisosComponent {
  data: Aviso; 
  id: string;
  loaded: boolean = false; 
  submitted = false;
  constructor(public dataService: DataService, public router: Router, public route: ActivatedRoute, public auth: AuthService, public activatedRoute: ActivatedRoute,){
  }
  

  ngOnInit(){
    this.data = new Aviso();
    let hoy = this.getFormattedDate() ;
    this.data.fechaAlta = new Date(hoy); //TODO: corregir esto
    this.createForm(); 
    this.loaded = true;
    }

 getFormattedDate() {
    var todayTime = new Date();
    var month = todayTime .getMonth() + 1;
    var day = todayTime .getDate();
    var year = todayTime .getFullYear();
    return day + "-" + month + "-" + year;
}

  createForm(){
    //this.regForm = new FormGroup({nombre: new FormControl(""), codigo: new FormControl("")});
  }

  onSubmit()
  {
    console.log("onSubmit!");
    let parameters = [{"key": "id", "value": this.id }];

    //formateo los datos para postearlos
    for (const prop in this.data.dependencia)
    {
      if(prop != 'id')
        delete this.data.dependencia[prop]; 
    }
    this.dataService.httpFunction(this.dataService.URL_AVISO_NUEVO,this.data,this.data,parameters);
    this.submitted = true; 
  }



  procesarData(data:any){
   return data;
  }

  responseOk(httpOperation:string, http: string, data:any, ws:any ){
    //Procesar-Data
    switch(ws.name){
      case this.dataService.URL_AVISO_ID: 
        this.loaded =true;
        this.data = this.procesarData(data); 
      break; 
    }
  }
}