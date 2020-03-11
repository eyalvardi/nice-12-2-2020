import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user',
  template: `
    <div>
      user works! {{userId}}
    </div>
  `,
  styles: []
})
export class UserComponent implements OnInit {
  userId: string;

  constructor(private route : ActivatedRoute) {
    route.params.subscribe(params=> {
      this.userId = params.id;
    })
  }

  ngOnInit(): void {
  }

}
