import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { MedicineService } from '../../services/medicine.service';
import { Medicine } from '../../models/medicine.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {
  concat,
  concatMap,
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  switchMap,
  tap,
} from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddMedicineComponent } from '../add-medicine/add-medicine.component';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { UpdateMedicineComponent } from '../update-medicine/update-medicine.component';

@Component({
  selector: 'app-show-medicine',
  templateUrl: './show-medicine.component.html',
  styleUrls: ['./show-medicine.component.scss'],
})
export class ShowMedicineComponent implements OnInit, AfterViewInit {
  // medicineList: any;
  medicineList: Medicine[] = [];
  public pagination = [5, 10, 25, 50];
  displayedColumns = [
    'id',
    'name',
    'price',
    'distributer',
    'quantity',
    'type',
    'update',
    'delete',
  ];

  dataSource: MatTableDataSource<Medicine> = new MatTableDataSource();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  // @ViewChild('searchBar')
  // searchBar!: ElementRef;
  loading = true;
  searchBar = new FormControl('', [Validators.required]);

  constructor(
    private medicineService: MedicineService,
    public dialog: MatDialog,
    private router: Router,
    private snackBar: SnackbarService
  ) {
    this.searchAll();
  }
  ngOnInit(): void {
    this.searchBar.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter(() => this.searchBar.valid),
        switchMap((value) => this.medicineService.searchMedicine(value))
      )
      .subscribe((res) => {
        this.medicineList = res;
        this.dataSource.data = this.medicineList;
      });
  }

  // applyFilter(filterValue: any) {
  //   filterValue = filterValue.trim(); // Remove whitespace
  //   filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
  //   this.dataSource.filter = filterValue;
  // }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  searchMedicine(value: any) {
    console.log(value);
  }
  searchAll() {
    this.medicineService
      .getMedicines()
      .pipe(tap(() => (this.loading = true)))
      .subscribe((res) => {
        this.dataSource.data = res;
        this.loading = false;
      });
  }


  // Add Medicine Dialog
  openAddMedicineDialog(): void {
    let dialogRef = this.dialog.open(AddMedicineComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      // console.log('The dialog was closed');
    });
  }


//Update Medicine Dialog
update(id: number) {
  this.openUpdateMedicineDialog();
}
openUpdateMedicineDialog(): void {

  this.medicineService.getSingleMedicine(1).subscribe(res=>{
    const data = res;
    let dialogRef = this.dialog.open(UpdateMedicineComponent, {
      data:data
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      // console.log('The dialog was closed');
    });
  })
}

  //Confirmation & Delete Dialogue

  deleteMedicine(id: number): void {
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '300px',
    });
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.router.navigate(['/medicine/delete/', id]);
      }
    });
  }
}
