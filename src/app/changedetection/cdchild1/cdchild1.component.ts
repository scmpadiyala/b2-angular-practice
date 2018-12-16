import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  DoCheck,
  Input
} from "@angular/core";

@Component({
  selector: "app-cdchild1",
  templateUrl: "./cdchild1.component.html",
  styleUrls: ["./cdchild1.component.css"],
  changeDetection: ChangeDetectionStrategy.Default
})
export class Cdchild1Component implements OnInit, DoCheck {
  @Input() stdids: any[];

  detectFlag = "true";

  i = 1;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  ngDoCheck() {
    console.log("Detect Changes <<Child 1>>  : " + this.detectFlag);
    if (this.detectFlag === "false") {
      console.log("Change Detection detached : <<Child 1>>");
      this.cd.detach();
    } else if (this.detectFlag === "true" && this.i == 1) {
      console.log("Change Detection reattached : <<Child 1>>");
      // this.cd.reattach();
      this.cd.detectChanges();
      this.i++;
    }
  }
}
