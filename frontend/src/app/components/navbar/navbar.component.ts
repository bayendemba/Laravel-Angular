import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../service/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  public loggedIn: boolean;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    // this.loggedIn = this.authService.authStatus;
    this.authService.authStatus.subscribe(value => (this.loggedIn = value));
  }
}
