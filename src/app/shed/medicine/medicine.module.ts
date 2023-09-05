import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowMedicineComponent } from './components/show-medicine/show-medicine.component';
import { MedicineComponent } from './medicine.component';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { RouterModule } from '@angular/router';
import { AddMedicineComponent } from './components/add-medicine/add-medicine.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MedicineDistributerModule } from '../medicine-distributer/medicine-distributer.module';
import { DeleteMedicineComponent } from './components/delete-medicine/delete-medicine.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { UpdateMedicineComponent } from './components/update-medicine/update-medicine.component';



@NgModule({
  declarations: [
    ShowMedicineComponent,
    MedicineComponent,
    AddMedicineComponent,
    DeleteMedicineComponent,
    ConfirmationComponent,
    UpdateMedicineComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class MedicineModule { }
