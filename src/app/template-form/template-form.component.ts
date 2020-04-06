import {Component, OnInit} from '@angular/core';
import {Customer, Gender} from '../../model/customer.model';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  customer:Customer=new Customer('',0,'','',Gender.Male);

  constructor() { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.customer);
  }

}
