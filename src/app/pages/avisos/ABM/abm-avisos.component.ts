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
    templateUrl: './abm-avisos.component.html',
    styleUrls: ['./abm-avisos.component.scss']
})

export class AbmAvisosComponent {
  data: any; 
  id: string;
  loaded: boolean = false; 
  submitted = false;
  constructor(public dataService: DataService, public router: Router, public route: ActivatedRoute, public auth: AuthService, public activatedRoute: ActivatedRoute,){
  }
  

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    let parameters = [{"key": "id", "value": this.id }];
    this.dataService.httpFunction(this.dataService.URL_AVISO_ID,this,"",parameters);
    this.createForm();
  }


  createForm(){
    //this.regForm = new FormGroup({nombre: new FormControl(""), codigo: new FormControl("")});
  }

  onSubmit()
  {
    console.log("onSubmit!");
    let parameters = [{"key": "id", "value": this.id }];
    this.dataService.httpFunction(this.dataService.URL_AVISO_EDIT,this,"",parameters);
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