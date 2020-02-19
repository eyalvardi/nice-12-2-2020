import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'nice-user',
    template: `
        <div class="user-layout">
            <div class="image">
                <img [src]="user.picture.large">
            </div>
            <div class="user-header">{{user.name.first}} {{user.name.last}}</div>
            <div class="user-content">content</div>
            <div class="user-footer">footer</div>

        </div>
    `,
    styles: [`
        .user-layout {
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-template-rows   : repeat(3, 1fr);
            grid-template-areas  : 
                "img r1" 
                "img r2" 
                "img r3";
            grid-gap: 8px;
        }
        .image {
            grid-area: img;
        }
        .user-header{
          grid-area: r1;
        }
        .user-content{
          grid-area: r2;
        }
        .user-footer{
          grid-area: r3;
        }

        @media (max-width: 400px)  {
          .user-layout{
            height: 250px;
            grid-template-columns: 1fr;
            grid-template-rows   : repeat(3, 1fr);
              grid-template-areas:
                "img"
                "r1"
                "r2" 
                "r3";
          }
        }

    `]
})
export class UserComponent implements OnInit {
    _user = null;
    @Input('source')
    set user(val){
        this._user = val;
    }
    get user(){ return this._user; }

    @Input() userNo: number;

    constructor() {
    }

    ngOnInit(): void {
    }

}
