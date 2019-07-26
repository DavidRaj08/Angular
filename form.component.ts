import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/core/src/render3/util';
import { log } from 'util';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  model = {};
  log(msg){
    console.log(msg);
  }
  onSubmit(){
    alert('Form Submitted: ' + JSON.stringify(this.model));
  }
  constructor() { }

  ngOnInit() {
  }

}
