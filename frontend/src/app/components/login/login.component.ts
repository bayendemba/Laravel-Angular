import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { TokenService } from "../../service/token.service";
import { LpnsService } from "../../service/lpns.service";
import { AuthService } from "../../service/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public form = {
    email: null,
    password: null
  };
  public error = null;
  constructor(
    private lpns: LpnsService,
    private token: TokenService,
    private router: Router,
    private authService: AuthService
  ) {}

  onSubmit() {
    return this.lpns
      .login(this.form)
      .subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );
  }

  handleResponse(data) {
    this.token.handle(data.access_token);
    this.authService.changeAuthStatus(true);
    this.router.navigateByUrl("/profile");
  }

  handleError(error) {
    this.error = error.error.error;
  }

  ngOnInit() {}
}
