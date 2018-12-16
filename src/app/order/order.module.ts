import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NeworderComponent } from "./neworder/neworder.component";
import { OrderlistComponent } from "./orderlist/orderlist.component";
import { RouterModule } from "@angular/router";
import { OrderrouteguardService } from "./orderrouteguard.service";
import { FormsModule } from "@angular/forms";

const routes = [
  {
    path: "",
    component: NeworderComponent,
    canActivate: [OrderrouteguardService],
    resolve: { orderlist: OrderrouteguardService },
    canDeactivate: [OrderrouteguardService],

    children: [{ path: "orderlist", component: OrderlistComponent }]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  declarations: [NeworderComponent, OrderlistComponent],
  providers: [OrderrouteguardService]
})
export class OrderModule {}
