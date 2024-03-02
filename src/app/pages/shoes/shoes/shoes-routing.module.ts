import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ShoesComponent } from './shoes.component';


const routes: Routes = [
  { path: '', component: ShoesComponent },
  // Add more routes here
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ShoesRoutingModule { }
