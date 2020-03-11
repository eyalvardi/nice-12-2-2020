import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { UsersModule } from "./users/users.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        HttpClientModule,


        AppRoutingModule,
        UsersModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
