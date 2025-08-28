import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
// importing required objects
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from "../app-routing.module";
// import the parent module
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [
    ReservationFormComponent,
    ReservationListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HomeModule
  ]
})
export class ReservationModule { }
