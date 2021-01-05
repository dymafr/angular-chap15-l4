import { Routes } from "@angular/router";
import { UserFormComponent } from "./user-form/user-form.component";
import { UserListComponent } from "./user-list/user-list.component";

export const APP_ROUTES: Routes = [
  { path: "", component: UserListComponent, pathMatch: "full" },
  { path: "new", component: UserFormComponent },
  { path: ":id/edit", component: UserFormComponent }
];
