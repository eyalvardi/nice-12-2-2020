import { Component, ContentChild, ContentChildren, OnInit, QueryList, TemplateRef } from '@angular/core';
import { NiceTabComponent } from "../nice-tab/nice-tab.component";

@Component({
  selector: 'nice-tabs',
  templateUrl: './nice-tabs.component.html',
  styleUrls: ['./nice-tabs.component.css']
})
export class NiceTabsComponent implements OnInit {
  title = "eyal";

  @ContentChild('titleTemp',{read:TemplateRef}) titleTemp : TemplateRef<any>;
  @ContentChild('titleTempEven',{read:TemplateRef}) titleTempEven : TemplateRef<any>;
  @ContentChildren(NiceTabComponent) tabs : QueryList<NiceTabComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  setActiveTab(tab: NiceTabComponent) {
    this.tabs.forEach( t => t.active = false);
    tab.active = true;
  }
}
