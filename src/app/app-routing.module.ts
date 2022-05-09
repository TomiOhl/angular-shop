import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { StoreComponent } from './store/store.component';
import { DetailsComponent } from './details/details.component';
import { FillOrderComponent } from './fill-order/fill-order.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'store', component: StoreComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  {
    path: 'details/:id',
    component: DetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'buy/:id',
    component: FillOrderComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
