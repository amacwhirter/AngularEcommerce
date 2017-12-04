import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "angularfire2";
import { environment } from '../environments/environment';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { ProductsComponent } from './shopping/components/products/products.component';
import { LoginComponent } from './core/components/login/login.component';

import { SharedModule } from "./shared/shared.module";
import { AdminModule } from "./admin/admin.module";
import { ShoppingModule } from "./shopping/shopping.module";
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      {
        path: '',
        component: ProductsComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
