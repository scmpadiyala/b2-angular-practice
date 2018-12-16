import { Component, OnInit, NgZone } from "@angular/core";

@Component({
  selector: "app-zonesample",
  templateUrl: "./zonesample.component.html",
  styleUrls: ["./zonesample.component.css"]
})
export class ZonesampleComponent implements OnInit {
  percentageComplete = 0;

  constructor(private zone: NgZone) {}

  ngOnInit() {}

  processInsideNGZone() {
    this.percentageComplete = 0;
    console.log("processInsideNGZone Called : ");
    this.processTask();
  }

  processTask() {
    if (this.percentageComplete < 100) {
      this.percentageComplete = this.percentageComplete + 10;
      console.log(
        "Inside Zone Percentage Complete : " + this.percentageComplete + "%"
      );
      window.setTimeout(() => this.processTask(), 200);
    } else {
      console.log("Task inside NG Zone Completed");
    }
  }

  processOutsideNGZone() {
    this.percentageComplete = 0;
    console.log("processOutsideNGZone Called : ");
    this.zone.runOutsideAngular(() => this.processTaskOutside()); // executing in the outside zone
  }

  processTaskOutside() {
    if (this.percentageComplete < 100) {
      this.percentageComplete = this.percentageComplete + 10;
      console.log(
        "Inside Zone Percentage Complete : " + this.percentageComplete + "%"
      );
      window.setTimeout(() => this.processTaskOutside(), 200);
    } else {
      console.log("Task outside NG Zone Completed");
      // moving back to  angular zone
      this.zone.run(() => console.log("Task moving back to NG zone"));
    }
  }
}
