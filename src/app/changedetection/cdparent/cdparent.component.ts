import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cdparent",
  templateUrl: "./cdparent.component.html",
  styleUrls: ["./cdparent.component.css"]
})
export class CdparentComponent implements OnInit {
  stdids = [10, 20, 30, 40, 50];

  constructor() {}

  ngOnInit() {}

  handleAddID(e) {
    console.log("Before Addition : " + this.stdids);
    this.stdids.push(e.target.value);
    console.log("Post Addition Addition : " + this.stdids);
  }
}
