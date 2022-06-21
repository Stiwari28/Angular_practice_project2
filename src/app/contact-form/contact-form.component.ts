import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgControl } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  log(x: any){
    console.log(x);
  }
}

