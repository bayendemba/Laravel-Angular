import { LpnsService } from "./../../service/lpns.service";
import { Component, OnInit } from "@angular/core";

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

  onSubmit() {
    this.lpns
      .signup(this.form)
      .subscribe(data => console.log(data), error => this.handleError(error));
  }

  handleError(error) {
    this.error = error.error.errors;
  }
  constructor(private lpns: LpnsService) {}

  ngOnInit() {}
}
