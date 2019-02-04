
import { Injectable } from '@angular/core';
import { Ibike } from './ibike';
import { Observable, of } from 'rxjs'
// import { FormComponent } from './form/form.component';
// import { TableComponent } from './table/table.component';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  bikeArray: Ibike[] = [];

  constructor() { }

  pushbikedata(instance) {
    this.bikeArray.push(instance);
  }

  getbikedata(): Observable<Ibike[]> {
    return of(this.bikeArray);
  }

} 
