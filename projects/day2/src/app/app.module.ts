import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {GameModule} from './game/game.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TodoListModule} from "./todo-list";
import { MyTableComponent } from './my-table/my-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
    declarations: [
        AppComponent,
        MyTableComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,

        // My Modules
        GameModule,
        TodoListModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
