import {NgModule} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
    exports : [
        MatButtonModule,
        MatFormFieldModule,
        MatDatepickerModule
    ]
})
export class NgMaterialModule {

}
