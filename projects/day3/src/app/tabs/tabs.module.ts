import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NiceTabsComponent } from './components/nice-tabs/nice-tabs.component';
import { NiceTabComponent } from './components/nice-tab/nice-tab.component';


@NgModule({
    declarations: [
        NiceTabsComponent,
        NiceTabComponent
    ],
    exports: [
      NiceTabsComponent,
      NiceTabComponent
    ],
    imports: [
        CommonModule
    ]
})
export class TabsModule {
}
