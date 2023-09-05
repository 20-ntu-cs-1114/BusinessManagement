import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MedicineDistributer } from '../models/distributers.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineDistributerService {

  url = "http://localhost:3000/medicine_distributer"
  constructor(private http:HttpClient) { }
  getDistributers():Observable<MedicineDistributer[]>{
    return this.http.get<MedicineDistributer[]>(this.url)
  }
  searchDistributers(name:any):Observable<MedicineDistributer[]>{
    return this.http.get<MedicineDistributer[]>(this.url+"?q="+name)
  }
}
