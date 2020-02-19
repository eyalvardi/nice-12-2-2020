import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GameModule } from './game/game.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoListComponent } from './todo-list/src/components/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GameModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
