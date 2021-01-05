import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { UserListComponent } from "./user-list/user-list.component";
import { RouterModule } from "@angular/router";
import { APP_ROUTES } from "./app.routing";
import { UserFormComponent } from "./user-form/user-form.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [AppComponent, UserListComponent, UserFormComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
