import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import  { IGroupFildes } from "./schema.interface";
import { map } from "rxjs/operators";
import { FormControl, FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {
  json: IGroupFildes;
  myForm:FormGroup = new FormGroup({});

  constructor(private http : HttpClient) { }

  async loadJson(){
    this.json = await this.http.get<IGroupFildes>('./app/form-builder/fields.json')
        .toPromise();

  }
  buildFormGroup(){
    for (let key in this.json ){
      this.myForm.addControl(key,new FormControl(this.json[key].value))
    }
  }
}
