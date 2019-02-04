import { Component, OnInit } from '@angular/core';
import { Ibike } from '../ibike';
import { BikeService } from '../bike.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private bikeService : BikeService) { }
  ngOnInit() {
  }

  bikeObj : Ibike;
  bikeObj1: Ibike = {
    bikeBrand: null,
    bikeModel: null,
    bikeNumber:null
  }

  bikeform(): void {
    this.bikeObj ={
      bikeBrand : this.bikeObj1.bikeBrand,
      bikeModel:this.bikeObj1.bikeModel,
      bikeNumber : this.bikeObj1.bikeNumber
    }
    // return this.bikeObj;
    console.log(this.bikeObj);
    this.bikeService.pushbikedata(this.bikeObj);
    // console.log(this.bikeService.pushbikedata);
  }
}
