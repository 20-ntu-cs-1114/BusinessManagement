import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ShowMedicineComponent } from './components/show-medicine/show-medicine.component';


import { RouterModule } from '@angular/router';
import { AddMedicineComponent } from './components/add-medicine/add-medicine.component';
import { unsaveChangesGuard } from './guards/unsave-changes.guard';
import { DeleteMedicineComponent } from './components/delete-medicine/delete-medicine.component';

const routes: Routes = [
{
  path:'show',
  component:ShowMedicineComponent,

},
{
  path:'add',
  component:AddMedicineComponent,
},
{
  path:'delete:/id',
  component:DeleteMedicineComponent
}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class MedicineRoutingModule { }
