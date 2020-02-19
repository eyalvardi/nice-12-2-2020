import { BoardComponent } from './components/board/board.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { GameComponent } from './components/game/game.component';
import { ControllerComponent } from './components/controller/controller.component';
import { StatusComponent } from './components/status/status.component';

@NgModule({
    declarations : [
        GameComponent, 
        ControllerComponent, 
        StatusComponent,
        BoardComponent
    ],
    exports      : [GameComponent],
    imports      : [
        CommonModule
    ]
})
export class GameModule{}