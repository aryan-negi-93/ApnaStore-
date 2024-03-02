import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ShoesComponent } from './pages/shoes/shoes/shoes.component';
import { FashionComponent } from './pages/Fashion/fashion/fashion.component';
import { ElectronicsComponent } from './pages/Electronics/electronics/electronics.component';
import { AppliancesComponent } from './pages/Appliances/appliances/appliances.component';
import { GroceryComponent } from './pages/Grocery/grocery/grocery.component';
import { MobilesComponent } from './pages/mobiless/mobiles/mobiles.component';
import { DashboardComponent } from './admin_panel/Dashboard/dashboard/dashboard.component';
import { AdminLandingPageComponent } from './admin_panel/admin-landing-page/admin-landing-page/admin-landing-page.component';
import { SelectCatComponent } from './admin_panel/pages/all-products/category-select/select-cat/select-cat.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { AuthguardGuard } from './guard/authguard.guard';
import { ViewSingleComponent } from './pages/view-single/view-single/view-single.component';
import { YoutCartComponent } from './pages/your-cart/yout-cart/yout-cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthguardGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'shoes', component: ShoesComponent, canActivate: [AuthguardGuard], loadChildren: () => import('../app/pages/shoes/shoes/shoes.module').then(m => m.ShoesModule) },
  { path: 'Fashion', component: FashionComponent, canActivate: [AuthguardGuard] },
  { path: 'Electronics', component: ElectronicsComponent, canActivate: [AuthguardGuard] },
  { path: 'Appliances', component: AppliancesComponent, canActivate: [AuthguardGuard] },
  { path: 'Grocery', component: GroceryComponent, canActivate: [AuthguardGuard] },
  { path: 'Mobiles', component: MobilesComponent, canActivate: [AuthguardGuard], loadChildren: () => import('../app/pages/mobiless/mobiles/mobiles.module').then(m => m.MobilesModule) },
  { path: 'sproduct/:id', component: ViewSingleComponent },
  { path: 'cart', component: YoutCartComponent },
  {
    path: 'admin', component: AdminLandingPageComponent, canActivate: [AuthguardGuard],
    children: [
      { path: '', component: DashboardComponent, canActivate: [AuthguardGuard] },
      { path: 'adminCat', component: SelectCatComponent, canActivate: [AuthguardGuard] }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


