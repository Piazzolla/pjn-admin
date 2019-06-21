import { Component } from '@angular/core';
import { DataService } from '../../../services/data.services';
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
    templateUrl: './abm-aviso.component.html',
    styleUrls: ['./abm-aviso.component.scss']
})

export class AbmAvisoComponent {
  data: any; 
  id: string;
  loaded: boolean = false; 

  constructor(public dataService: DataService, public router: Router, public route: ActivatedRoute, public auth: AuthService, public activatedRoute: ActivatedRoute,){
  }
  

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    let parameters = [{"key": "id", "value": this.id }];
    this.dataService.httpFunction(this.dataService.URL_AVISO_ID,this,"",parameters);
    this.createForm();
  }


  submitForm(){
  }


  createForm(){
    //this.regForm = new FormGroup({nombre: new FormControl(""), codigo: new FormControl("")});
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