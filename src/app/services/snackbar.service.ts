import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar,) { }
  openSnackBar(text:string) {
    this._snackBar.open(text, 'X', {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration:3000,
    });
  }
}
