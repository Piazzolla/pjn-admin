import { Component } from '@angular/core';
//import { DataService } from '../../../services/data.services';
import { AvisosService } from '../../../services/avisos.service';
import { Aviso } from '../../../models/aviso.model';
import { Router, Route,ActivatedRoute, ParamMap  } from '@angular/router';
import swal from 'sweetalert2';
import { AuthService } from '../../../shared/auth/auth.service';
import { hexToRgb } from '@swimlane/ngx-charts/release/utils';
import { FormControl, FormGroup, FormBuilder, Validator, Validators,ReactiveFormsModule } from "@angular/forms";


declare var require: any;
// const data: any = require('../../../shared/data/company.json');
// shared/data/company.json
@Component({
    selector: 'aviso-abm',
    templateUrl: './mod-avisos.component.html',
    styleUrls: ['./mod-avisos.component.scss']
})

export class ModAvisosComponent {
  data: any; 
  id: string;
  loaded: boolean = false; 
  submitted: boolean = false;
  constructor(public avisosService: AvisosService, public router: Router, public activatedRoute: ActivatedRoute, public auth: AuthService){
  }
  

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("ID: " + this.id);
    let parameters = [{"key": "id", "value": this.id }];
  //  this.dataService.httpFunction(this.dataService.URL_AVISO_ID,this,"",parameters);
    this.data = this.avisosService.findId(this.id);
    this.createForm();
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
//    this.dataService.httpFunction(this.dataService.URL_AVISO_EDIT,this.data,this.data,parameters);
    this.avisosService.editAviso(parameters, this.data);
    this.submitted = true; 
  }



  procesarData(data:any){
   return data;
  }

  responseOk(httpOperation:string, http: string, data:any, ws:any ){
    //Procesar-Data
    switch(ws.name){
 //     case this.dataService.URL_AVISO_ID: 
 //       this.data = this.procesarData(data); 
 //       this.loaded =true;
 //     break; 
    }
  }
}