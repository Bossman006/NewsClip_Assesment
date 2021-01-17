import { Component, OnInit,ViewChild } from '@angular/core';
import {VolkswagenService} from 'src/app/volkswagen.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {MatAccordion} from '@angular/material/expansion';
import {Model} from 'src/app/models/car-model.model'


@Component({
  selector: 'app-car-model',
  templateUrl: './car-model.component.html',
  styleUrls: ['./car-model.component.scss']
})
export class CarModelComponent implements OnInit {
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
    this.volkswagenservice.getModelList().then(res => this.volkswagenservice.carModelList= res as Model[]);
  }
  resetForm(form?:NgForm){
    this.volkswagenservice.carModelData={
      Model_ID:0,
      Model_Name:'',
      Model_Body_Type:'',
      Model_Engine_Type:'',
      Model_Price:0,
      Model_In_Stock:0,
      Make_ID:0,
      Model_Description:''
      
    }
  }
    updatecarModel(){
      this.volkswagenservice.putcarMake(this.volkswagenservice.carMakeData).subscribe(res => {
        console.log(res);
        this.resetForm();
        this.refreshList();
      })
    }
carModelUpdate(obj:Model){
  console.log(obj);
  this.resetForm();
  this.volkswagenservice.carModelData.Model_ID = obj.Model_ID;
  this.volkswagenservice.carModelData.Model_Name = obj.Model_Name;
  this.volkswagenservice.carModelData.Model_Body_Type = obj.Model_Body_Type;
  this.volkswagenservice.carModelData.Model_Engine_Type = obj.Model_Engine_Type;
  this.volkswagenservice.carModelData.Model_Price = obj.Model_Price;
  this.volkswagenservice.carModelData.Model_In_Stock = obj.Model_In_Stock;
  this.volkswagenservice.carModelData.Model_Description = obj.Model_Description;

 

}
AddNewcarModel(){
  console.log(this.volkswagenservice.carModelData);
  this.volkswagenservice.savecarModel(this.volkswagenservice.carModelData).subscribe(res=>{
    console.log(res);
    this.resetForm();
    this.refreshList();
  })
}
  carModelDelete(id:number){
    if(confirm('Are you sure?')) {
      this.volkswagenservice.carModelDeletion(id).subscribe(res => {
        console.log(res);
        this.resetForm();
        this.refreshList();
      })
    }
}
}