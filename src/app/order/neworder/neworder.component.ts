import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-neworder",
  templateUrl: "./neworder.component.html",
  styleUrls: ["./neworder.component.css"]
})
export class NeworderComponent implements OnInit {
  isDirty = "true";

  orderList;
  constructor(private acitvatedRoute: ActivatedRoute) {
    this.orderList = this.acitvatedRoute.snapshot.data["orderlist"];
  }

  ngOnInit() {}
}
