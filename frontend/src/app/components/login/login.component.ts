import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LpnsService } from "./../../service/lpns.service";
import { TokenService } from "../../service/token.service";

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
  constructor(private lpns: LpnsService, private token: TokenService) {}

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
  }

  handleError(error) {
    this.error = error.error.error;
  }

  ngOnInit() {}
}
