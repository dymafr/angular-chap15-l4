import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { User } from "../user.interface";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"]
})
export class UserFormComponent implements OnInit {
  public userForm: FormGroup;
  public user: User;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private httpService: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get("id");
      if (id) {
        this.httpService
          .get<User>(`https://restapi.fr/api/angularuser/${id}`)
          .subscribe((user: User) => {
            this.user = user;
            this.initForm(user);
          });
      } else {
        this.initForm();
      }
    });
  }

  initForm(user = { username: null, age: null }) {
    this.userForm = this.fb.group({
      username: [user.username],
      age: [user.age]
    });
  }

  submit() {
    if (this.user) {
      this.httpService
        .put<User>(
          `https://restapi.fr/api/angularuser/${this.user._id}`,
          this.userForm.value
        )
        .subscribe((user: User) => this.router.navigateByUrl("/"));
    } else {
      this.httpService
        .post<User>("https://restapi.fr/api/angularuser", this.userForm.value)
        .subscribe((user: User) => this.router.navigateByUrl("/"));
    }
  }

  delete() {
    this.httpService
      .delete(`https://restapi.fr/api/angularuser/${this.user._id}`)
      .subscribe((user: User) => this.router.navigateByUrl("/"));
  }
}
