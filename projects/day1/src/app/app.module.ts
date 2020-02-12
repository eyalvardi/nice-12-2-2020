import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';
import { UserComponent } from './user.component';
import { GameComponent } from './game-demo/game.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    UserComponent,
    GameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
