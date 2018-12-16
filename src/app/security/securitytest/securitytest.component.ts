import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-securitytest",
  templateUrl: "./securitytest.component.html",
  styleUrls: ["./securitytest.component.css"]
})
export class SecuritytestComponent implements OnInit {
  mytext =
    "Sample Text <script> alert('welcome to volunarabilites') </script> my text completed";

  safemytext;

  unsafeURL = "javascript:alert('Hi there')";
  safeURL;

  constructor(private sanitizer: DomSanitizer) {
    this.safemytext = this.sanitizer.bypassSecurityTrustHtml(this.mytext);
    this.safeURL = this.sanitizer.bypassSecurityTrustUrl(this.unsafeURL);
  }

  ngOnInit() {}
}
