import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './master-layout/header/header/header.component';
import { FooterComponent } from './master-layout/footer/footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { SliderComponent } from './home/Slider/slider/slider.component';
import { ProductsComponent } from './home/products/products/products.component';
import { ShoesComponent } from './pages/shoes/shoes/shoes.component';
import { AppliancesComponent } from './pages/Appliances/appliances/appliances.component';
import { ElectronicsComponent } from './pages/Electronics/electronics/electronics.component';
import { FashionComponent } from './pages/Fashion/fashion/fashion.component';
import { GroceryComponent } from './pages/Grocery/grocery/grocery.component';
import { MobilesComponent } from './pages/mobiless/mobiles/mobiles.component';
import { DashboardComponent } from './admin_panel/Dashboard/dashboard/dashboard.component';
import { AdminHeaderComponent } from './admin_panel/admin-header/admin-header/admin-header.component';
import { AdminSidenavComponent } from './admin_panel/admin-sidenav/admin-sidenav/admin-sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { AdminLandingPageComponent } from './admin_panel/admin-landing-page/admin-landing-page/admin-landing-page.component';

import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import {ErrorStateMatcher} from '@angular/material/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { SelectCatComponent } from './admin_panel/pages/all-products/category-select/select-cat/select-cat.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { MaterialModule } from '../../src/material.module';
import { ToastrModule } from 'ngx-toastr';
import { ViewSingleComponent } from './pages/view-single/view-single/view-single.component';
import { YoutCartComponent } from './pages/your-cart/yout-cart/yout-cart.component';
import { ShoesRoutingModule } from './pages/shoes/shoes/shoes-routing.module';
import { UpdateProductDialogComponent } from './admin_panel/update-product-dialog/update-product-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    ProductsComponent,
    ShoesComponent,
    AppliancesComponent,
    ElectronicsComponent,
    FashionComponent,
    GroceryComponent,
    MobilesComponent,
    DashboardComponent,
    AdminHeaderComponent,
    AdminSidenavComponent,
    AdminLandingPageComponent,
    SelectCatComponent,
    LoginComponent,
    SignupComponent,
    ViewSingleComponent,
    YoutCartComponent,
    UpdateProductDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatIconModule,
    MaterialModule,
    ToastrModule.forRoot(),
    ShoesRoutingModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {




}





