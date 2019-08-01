import { Component, OnInit } from '@angular/core';
import { Integrante } from '../../../../models/integrante.model'

@Component({
  selector: 'edit-integrantes',
  templateUrl: './edit-integrante.component.html',
  styleUrls: ['./edit-integrante.component.scss']
})
export class EditIntegranteComponent implements OnInit {

  submitted: boolean;
  loading: boolean;
  data: Integrante;
  constructor() { 
  	this.submitted= true;
  	this.loading=false;
  	this.data = new Integrante();
  }

  ngOnInit() {
  }

}
