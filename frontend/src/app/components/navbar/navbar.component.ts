import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../service/auth.service";
import { Router } from "@angular/router";
import { TokenService } from "../../service/token.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  public loggedIn: boolean;
  constructor(
    private authService: AuthService,
    private router: Router,
    private token: TokenService
  ) {}

  ngOnInit() {
    // this.loggedIn = this.authService.authStatus;
    this.authService.authStatus.subscribe(value => (this.loggedIn = value));
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.token.remove();
    this.authService.changeAuthStatus(false);
    this.router.navigateByUrl("/login");
  }
}
