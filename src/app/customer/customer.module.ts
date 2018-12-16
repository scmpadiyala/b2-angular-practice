import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CustomerRoutingModule } from "./customer-routing.module";
import { NewcustomerComponent } from "./newcustomer/newcustomer.component";

@NgModule({
  imports: [CommonModule, CustomerRoutingModule],
  declarations: [NewcustomerComponent],
  exports: [NewcustomerComponent]
})
export class CustomerModule {}
