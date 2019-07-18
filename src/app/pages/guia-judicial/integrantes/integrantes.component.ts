import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.services';
import { Router, Route,ActivatedRoute, ParamMap  } from '@angular/router';
import { AuthService } from '../../../shared/auth/auth.service';
import { FormControl, FormGroup, FormBuilder, Validator, Validators,ReactiveFormsModule } from "@angular/forms";
import { hexToRgb } from '@swimlane/ngx-charts/release/utils';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
  selector: 'dependencia-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.scss']
})
export class IntegrantesComponent implements OnInit {

  private loaded:boolean = true;
  private regForm:FormGroup;
  columns: any;
  public page: any; 
  temp = [];
  data1 = [];
  id: string;

  constructor(public dataService: DataService, public router: Router, public route: ActivatedRoute, public auth: AuthService){
    this.page = {"totalElements": 0};
  }

  ngOnInit() {
    this.reload();
    this.id = this.route.snapshot.paramMap.get('id');
    let parameters = [{"key": "id", "value": this.id }];
    this.dataService.httpFunction(this.dataService.URL_INTEGRANTES_DEPEND_ID,this,"",parameters);
    this.columns = [
                     {"name": "id", "label": "id", "allowEdit": false },
                     {"name": "cargo", "label": "Cargo:", "allowEdit": false},
                     {"name": "nombre", "label": "Nombre:", "allowEdit": false},
                     {"name": "apellido", "label": "Apellido:", "allowEdit": false},
                    ];
 //   this.createForm(); 
//    
 
  }

  createForm(){
    this.regForm = new FormGroup({nombre: new FormControl(""), codigo: new FormControl("")});
  }

  getStyleCellValue(column: any, value: any){
    switch(column.label){
      case '':
        if(value!= ""){
          return {'color': 'rgb(100,0,0)', 'font-weight': 'bold'};    
        }
      break;
    }
    return {};
  }
  getDataCellValue(column: any, value: any){
  	console.log("getDataCellValue: " + value);
    return value; 
  }

  reload(){
  	console.log("RELOAD");
    this.loaded =false; 
  }

    procesarData(data:any){
    return data;
  }
  responseOk(httpOperation:string, http: string, data:any, ws:any ){
    //Procesar-Data
    switch(ws.name){
      case this.dataService.URL_INTEGRANTES_DEPEND_ID: 
        this.data1 = this.procesarData(data); 
        console.log("THIS.DATA: " + JSON.stringify(this.data1));
        this.loaded=true;
      break; 
    }
  }
}
