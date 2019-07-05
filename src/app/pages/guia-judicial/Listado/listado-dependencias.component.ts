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
    selector: 'listado-dependencias',
    templateUrl: './listado-dependencias.component.html',
    styleUrls: ['./listado-dependencias.component.scss']
})


export class ListadoDependenciasComponent {
   
  editing = {};
  public loaded:boolean = true;
  Columns: any; 
  pageSizeDefault: number = 100;
  data = [];
  dataLoaded: boolean = false; 
  public page: any; 
  private regForm:FormGroup;
  public findNombre: string="";
  rows = [];
  temp = [];


  constructor(public dataService: DataService, public router: Router, public route: ActivatedRoute, public auth: AuthService){
    this.page = {"totalElements": 0};
  }
  

  ngOnInit(){
    this.dataService.httpFunction(this.dataService.URL_DEPENDENCIA_ALL,this,"","");

    this.Columns = [
                    {"name": "id", "label": "id", "allowEdit": false },
                    {"name": "dependenciaInfo.nombre", "label": "Dependencia", "allowEdit": false},
                    {"name": "descripcion", "label": "Descripcion", "allowEdit": false},
                   ];
    this.reload();
    this.createForm();
    this.temp = this.data;
  }


  submitForm(){
    this.setPage({offset:0});
  }


  createForm(){
    this.regForm = new FormGroup({nombre: new FormControl(""), codigo: new FormControl("")});
  }
  setValue(control: string){
  
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
    return value; 
  }

  Confirmar(id: number) {
    // var self = this; 
    // swal({
    //     title: '¿Esta usted seguro que desea eliminar la Dependencia?',
    //     text: "!No podrá deshacer esta operación!",
    //     type: 'warning',
    //     showCancelButton: true,
    //     confirmButtonColor: '#0CC27E',
    //     cancelButtonColor: '#FF586B',
    //     confirmButtonText: 'Eliminar',
    //     cancelButtonText: "No"
    // }).then(function (isConfirm) {
    //     console.error(isConfirm);
    //     if (isConfirm.value == true) {
    //        
    //     }
    // }).catch(swal.noop);
}


  delete(row: any){
    this.Confirmar(row.id);
  }


  edit(row){
    let url:string = '/dependencia/edit/' + row.id;
    this.router.navigate([url]);
  }  

  user(row){
    let url:string = '/dependencia/user/' + row.id;
    this.router.navigate([url]);
  }  

updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      let tmp = d.dependenciaInfo.nombre.toLowerCase().indexOf(val) !== -1 || !val;
      return tmp;
    });
    // update the rows
    this.data = temp;
    // Whenever the filter changes, always go back to the first page
   // this.data.offset = 0;
}
  
  setPage(pageInfo){
    this.dataLoaded = false; 
    let body = {"page": pageInfo.offset, "size": this.pageSizeDefault }
    this.dataService.httpFunction(this.dataService.URL_DEPENDENCIA_ALL,this,body,"");
  }

  reload(){
    this.loaded =false; 
  }

  procesarData(data:any){
    return data;
  }
  responseOk(httpOperation:string, http: string, data:any, ws:any ){
    //Procesar-Data
    switch(ws.name){
      case this.dataService.URL_DEPENDENCIA_ALL: 
        this.loaded =true;
        this.page = data;
        this.data = data.content; 
        this.dataLoaded = true; 
        this.temp = [...this.data];
      break; 
    }
  }
}