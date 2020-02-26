import { Component, Input, OnInit } from '@angular/core';

let count = 0;

@Component({
    selector: 'nice-tab',
    templateUrl: './nice-tab.component.html',
    styleUrls: ['./nice-tab.component.css']
})
export class NiceTabComponent implements OnInit {
    @Input() title = `title ${count++}`;
    @Input() active = false;

    constructor() {
    }

    ngOnInit(): void {
    }

}
