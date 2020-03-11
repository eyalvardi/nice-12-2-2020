import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ErrorComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        HttpClientModule,
        QuicklinkModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
