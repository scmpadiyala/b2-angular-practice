import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanDeactivate,
  Resolve
} from "@angular/router";
import { NeworderComponent } from "./neworder/neworder.component";

@Injectable()
export class OrderrouteguardService
  implements CanActivate, CanDeactivate<NeworderComponent>, Resolve <Order[]> {
  constructor() {}

  isLogin = true;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log("Can Activate Called... " + state.url + " : " + state.root);

    // Writer a code to check the user login token and ...

    return this.isLogin;
  }

  canDeactivate(
    component: NeworderComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    console.log("Can DeActivate Called... ");

    return !(component.isDirty == "false");
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) :  Order[] {

    // Can read from DB or from API call then it will become async. 
    let orderList = [
      {orderid : 100, description : "product 1", deliveryStatus : "Delivered"},
      {orderid : 101, description : "product 2", deliveryStatus : "Packaed for Delivered"},
      {orderid : 102, description : "product 3", deliveryStatus : "Delivered"},
      {orderid : 103, description : "product 4", deliveryStatus : "Out for Delivery"}
    ];
    return orderList;
  }
}

export class Order {
  orderid;
  description;
  deliveryStatus;
}
