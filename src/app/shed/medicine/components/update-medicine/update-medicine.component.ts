import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { MedicineDistributerService } from 'src/app/shed/medicine-distributer/services/medicine-distributer.service';
import { MedicineService } from '../../services/medicine.service';
import { Observable } from 'rxjs';
import { MedicineDistributer } from 'src/app/shed/medicine-distributer/models/distributers.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Medicine } from '../../models/medicine.model';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.scss'],
})
export class UpdateMedicineComponent {
  public medDistributersList!: Observable<MedicineDistributer[]>;
  constructor(
    private medicineService: MedicineService,
    private snackBar: SnackbarService,
    private medDistributer: MedicineDistributerService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public medicine: Medicine
  ) {
    this.setValues();
    this.medDistributersList = this.medDistributer.getDistributers();
  }
  setValues() {
    this.updateMedicineForm.controls['name'].setValue(this.medicine.name);
    this.updateMedicineForm.controls['company'].setValue(this.medicine.company);
    this.updateMedicineForm.controls['distributer'].setValue(
      this.medicine.distributer
    );
    this.updateMedicineForm.controls['price'].setValue(this.medicine.price);
    this.updateMedicineForm.controls['quantity'].setValue(
      this.medicine.quantity
    );
    this.updateMedicineForm.controls['type'].setValue(this.medicine.type);
  }
  types = ['kg', 'litter'];
  updateMedicineForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
    price: [0, [Validators.required]],
    company: ['', [Validators.required, Validators.maxLength(50)]],
    distributer: ['', [Validators.required, Validators.maxLength(50)]],
    quantity: [0, [Validators.required]],
    type: ['', [Validators.required, Validators.maxLength(10)]],
  });
  updateMedicine(data: any) {
    console.log(data);
    const id = this.medicine.id;
    this.medicineService.updateMedicine(data,id).subscribe(res=>{
      console.log(res)
    })
  }
}
