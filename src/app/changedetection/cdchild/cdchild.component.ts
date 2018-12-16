import {
  Component,
  OnInit,
  Input,
  DoCheck,
  ChangeDetectorRef
} from "@angular/core";
import { ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-cdchild",
  templateUrl: "./cdchild.component.html",
  styleUrls: ["./cdchild.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdchildComponent implements OnInit, DoCheck {
  @Input() stdids: any[];

  detectFlag = "false";

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  ngDoCheck() {
    console.log("Detect Changes  : " + this.detectFlag);
    if (this.detectFlag === "true") {
      console.log("Enable Change Detection");
      this.cd.markForCheck();
    }
  }
}
