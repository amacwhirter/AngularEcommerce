import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [
    NavbarComponent,
    HomeComponent,
    LoginComponent
  ],
  exports: [
    NavbarComponent
  ],
  bootstrap: [NavbarComponent]
})
export class CoreModule { }
