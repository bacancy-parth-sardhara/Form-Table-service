import { Component, OnInit } from '@angular/core';
import { BikeService } from '../bike.service';
import { Ibike } from '../ibike';
// import { Subscribable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private bikeService : BikeService) { }
  
  bike : Ibike [] ;
  // subscription : Subscribable;

  ngOnInit() {
  }

  getdata(): void {
   this.bikeService.getbikedata().subscribe(data => {
      this.bike = data;
    });
  }
  ngOnDestroy(){
    // this.bikeService.getbikedata().subscribe(data => this.bike = data).unsubscribe();
  }
}
