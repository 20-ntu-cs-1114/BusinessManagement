import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from '../models/medicine.model';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  url = " http://localhost:3000/medicine"
  constructor(private http:HttpClient) { }
  getMedicines():Observable<Medicine[]>{
    return this.http.get<Medicine[]>(this.url);
  }
  searchMedicine(name:any):Observable<Medicine[]>{
    return this.http.get<Medicine[]>(this.url+'?q='+name)
  }
  addMedicine(data:Medicine){
    return this.http.post(this.url,data);
  }
  deleteMedicine(id:number){
    return this.http.delete(this.url+'/'+id)
  }
  getSingleMedicine(id:number):Observable<Medicine>{
    return this.http.get<Medicine>(this.url+'/'+id);
  }
  updateMedicine(data:Medicine,id:number){
    return this.http.put(this.url+'/'+id,data)
  }
}
