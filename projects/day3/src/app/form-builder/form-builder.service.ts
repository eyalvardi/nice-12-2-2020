import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import  { IGroupFildes } from "./schema.interface";
import { FormControl, FormGroup } from "@angular/forms";
import { fooValidation } from "./nice-validators";

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {
  json: IGroupFildes;
  myForm:FormGroup = new FormGroup({},fooValidation(2) );

  constructor(private http : HttpClient) { }

  async loadJson(){
    this.json = await this.http.get<IGroupFildes>('./app/form-builder/fields.json')
        .toPromise();
    this.buildFormGroup();

  }
  buildFormGroup(){
    for (let key in this.json ){
      this.myForm.addControl(key,new FormControl(this.json[key].value))
    }
  }
}
