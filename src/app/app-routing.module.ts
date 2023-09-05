import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowMedicineComponent } from './shed/medicine/components/show-medicine/show-medicine.component';
import { MedicineComponent } from './shed/medicine/medicine.component';
import { DeleteMedicineComponent } from './shed/medicine/components/delete-medicine/delete-medicine.component';

const routes: Routes = [
  // {path:'medicine',children:[{path:'',component:MedicineComponent}]},
  // {path:'medicine',loadChildren:()=> import('./shed/medicine/medicine.module').then(m=>m.MedicineModule)},
  {path:'medicine',component:MedicineComponent,children:[
    {path:'show',component:ShowMedicineComponent},
    {path:'delete/:id',component:DeleteMedicineComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
