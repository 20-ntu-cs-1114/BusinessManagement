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
    @Inject(MAT_DIALOG_DATA) public dialogData: Medicine
  ) {
    this.medDistributersList = this.medDistributer.getDistributers();
  }
  types = ['kg', 'litter'];
  updateMedicineForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
    price: [null, [Validators.required]],
    company: ['', [Validators.required, Validators.maxLength(50)]],
    distributer: ['', [Validators.required, Validators.maxLength(50)]],
    quantity: [NonNullableFormBuilder, [Validators.required]],
    type: ['', [Validators.required, Validators.maxLength(10)]],
  });
  updateMedicine(data: any) {
    console.log(data);
  }
}
