import { Component, Inject } from '@angular/core';

import { FormBuilder, FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, map, startWith, switchMap } from 'rxjs';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { MedicineDistributer } from 'src/app/shed/medicine-distributer/models/distributers.model';
import { MedicineDistributerService } from 'src/app/shed/medicine-distributer/services/medicine-distributer.service';
import { Medicine } from '../../models/medicine.model';
import { MedicineService } from '../../services/medicine.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.scss'],
})
export class AddMedicineComponent {


  addMedicineForm = this.formBuilder.group({
    name: ['', [Validators.required,Validators.maxLength(50)]],
    price: [null,[Validators.required]],
    company: ['', [Validators.required,Validators.maxLength(50)]],
    distributer: ['', [Validators.required,Validators.maxLength(50)]],
    quantity: [NonNullableFormBuilder,[Validators.required]],
    type: ['', [Validators.required,Validators.maxLength(10)]],
  });
  types = ['kg', 'litter'];

  public medDistributersList!: Observable<MedicineDistributer[]>;
  distributers!: MedicineDistributer[];

  constructor(
    private medicineService:MedicineService,
    private snackBar:SnackbarService,
    private medDistributer: MedicineDistributerService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddMedicineComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.medDistributersList = this.medDistributer.getDistributers();
  }
  ngOnInit() {
    this.medDistributersList =
      this.addMedicineForm.controls.distributer.valueChanges.pipe(
        switchMap((values) => this.medDistributer.searchDistributers(values))
      );
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  addMedicine(data: any) {
    if(this.addMedicineForm.valid&&this.addMedicineForm.touched){
      this.medicineService.addMedicine(data).subscribe(res=>{
        this.clearField()
        this.snackBar.openSnackBar("Successfully Added")
      });
    }else{
      this.snackBar.openSnackBar("Something went wrong")
    }
  }
  clearField(){
    this.addMedicineForm.reset()
  }


}
