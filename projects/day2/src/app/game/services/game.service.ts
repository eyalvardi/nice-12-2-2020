import { BoardModel } from '../models/board.model';
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class GameService{
    board : BoardModel = new BoardModel();
    level : number = 5;
    score : number = 0;

    /*constructor(private board2: BoardModel) {
        board2.setInit({})
    }*/
}
