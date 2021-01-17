import { Component, OnInit,ViewChild} from '@angular/core';
import {VolkswagenService} from 'src/app/volkswagen.service';
import { NgForm } from '@angular/forms';
import { Make } from 'src/app/models/car-make.model';
import { Router } from '@angular/router';
import {MatAccordion} from '@angular/material/expansion';
@Component({
  selector: 'app-car-make',
  templateUrl: './car-make.component.html',
  styleUrls: ['./car-make.component.scss']
})
export class CarMakeComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor(
    public volkswagenservice:VolkswagenService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.resetForm();
    this.refreshList();
  }

  refreshList(){
    this.volkswagenservice.getMakeList().then(res => this.volkswagenservice.carMakeList= res as Make[]);
  }
  resetForm(form?:NgForm){
    this.volkswagenservice.carMakeData={
      Make_ID:0,
      Make_Name :'',
      
    }
  }
    updatecarMake(){
      this.volkswagenservice.putcarMake(this.volkswagenservice.carMakeData).subscribe(res => {
        console.log(res);
        this.resetForm();
        this.refreshList();
      })
    }
carMakeUpdate(obj:Make){
  console.log(obj);
  this.resetForm();
  this.volkswagenservice.carMakeData.Make_ID = obj.Make_ID;
  this.volkswagenservice.carMakeData.Make_Name = obj.Make_Name;

 

}
AddNewcarMake(){
  console.log(this.volkswagenservice.carMakeData);
  this.volkswagenservice.savecarMake(this.volkswagenservice.carMakeData).subscribe(res=>{
    console.log(res);
    this.resetForm();
    this.refreshList();
  })
}
  carMakeDelete(id:number){
    if(confirm('Are you sure?')) {
      this.volkswagenservice.carMakeDeletion(id).subscribe(res => {
        console.log(res);
        this.resetForm();
        this.refreshList();
      })
    }
}
}
