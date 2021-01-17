import { Injectable } from '@angular/core';
import { Make } from './models/car-make.model';
import { Model } from './models/car-model.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VolkswagenService {
  carMakeData:Make;
  carMakeList:Make[];
  carModelData:Model;
  carModelList:Model[];
  
  
  constructor(private http:HttpClient) { }

  //Model Functions
  getModelList(){
    return this.http.get(environment.apiURL + '/Models').toPromise();
  }
  savecarModel(object:Model){
    return this.http.post(environment.apiURL+ '/Models', object)
  }
  carModelDeletion(id:number){
      return this.http.delete(environment.apiURL+ '/Models/' + id);
    }
    putcarModel(obj:Model)
    {
      return this.http.put(environment.apiURL + '/Models/' + obj.Model_ID,obj );
    }

    getMakeList(){
      return this.http.get(environment.apiURL + '/Makes').toPromise();
    }
    savecarMake(object:Make){
      return this.http.post(environment.apiURL+ '/Makes', object)
    }
    carMakeDeletion(id:number){
        return this.http.delete(environment.apiURL+ '/Makes/' + id);
      }
      putcarMake(obj:Make)
      {
        return this.http.put(environment.apiURL + '/Makes/' + obj.Make_ID,obj );
      }
}
