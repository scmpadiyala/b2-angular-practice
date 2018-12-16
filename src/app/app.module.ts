import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { NewcustomerComponent } from "./customer/newcustomer/newcustomer.component";
import { CustomerModule } from "./customer/customer.module";
import { SecuritytestComponent } from './security/securitytest/securitytest.component';
import { CdparentComponent } from './changedetection/cdparent/cdparent.component';
import { CdchildComponent } from './changedetection/cdchild/cdchild.component';
import { FormsModule } from "@angular/forms";
import { Cdchild1Component } from './changedetection/cdchild1/cdchild1.component';
import { ZonesampleComponent } from './zone/zonesample/zonesample.component';

const routes = [
  { path: "newcust", loadChildren: "./customer/customer.module#CustomerModule" },
  {path : "neworder", loadChildren : "./order/order.module#OrderModule"}
];

@NgModule({
  declarations: [AppComponent, SecuritytestComponent, CdparentComponent, CdchildComponent, Cdchild1Component, ZonesampleComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
