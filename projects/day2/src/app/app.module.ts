import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {GameModule} from './game/game.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TodoListModule} from "./todo-list";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,

        // My Modules
        GameModule,
        TodoListModule


    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
