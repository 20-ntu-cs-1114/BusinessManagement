import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineService } from '../../services/medicine.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-delete-medicine',
  templateUrl: './delete-medicine.component.html',
  styleUrls: ['./delete-medicine.component.scss'],
})
export class DeleteMedicineComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private medicineService: MedicineService,
    private snackBar: SnackbarService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((res) => {
      const id: number = Number(res.get('id'));
      this.medicineService.deleteMedicine(id).subscribe((res) => {
        this.snackBar.openSnackBar("Deleted Successfully")
      },err=>{
        this.snackBar.openSnackBar("Something went wrong")
      },()=>{
        this.router.navigate(['/medicine/show']);
      });
    });
  }
}
