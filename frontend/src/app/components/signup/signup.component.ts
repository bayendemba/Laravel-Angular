import { Component, OnInit } from "@angular/core";
import { TokenService } from "../../service/token.service";
import { LpnsService } from "../../service/lpns.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };
  public error = [];

  constructor(
    private lpns: LpnsService,
    private token: TokenService,
    private router: Router
  ) {}

  onSubmit() {
    this.lpns
      .signup(this.form)
      .subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );
  }

  handleResponse(data) {
    this.token.handle(data.access_token);
    this.router.navigateByUrl("/profile");
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  ngOnInit() {}
}
