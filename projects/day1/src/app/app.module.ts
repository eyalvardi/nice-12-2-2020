import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';
import { UserComponent } from './user.component';
import { GameComponent } from './game-demo/components/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CellComponent } from './game-demo/components/cell.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    UserComponent,
    GameComponent,
    CellComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
