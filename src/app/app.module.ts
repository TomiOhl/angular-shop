import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { environment } from 'src/environments/environment';
import { StoreComponent } from './store/store.component';
import { DetailsComponent } from './details/details.component';
import { FillOrderComponent } from './fill-order/fill-order.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, ErrorComponent, StoreComponent, DetailsComponent, FillOrderComponent, AdminComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
