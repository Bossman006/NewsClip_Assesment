import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CarMakeComponent } from './car-make/car-make.component';
import { CarModelComponent } from './car-model/car-model.component';


const routes: Routes = [

  {path:'',redirectTo:'Index',pathMatch:'full'},
  {path:'App',component:AppComponent},
  {path:'Model',component:CarModelComponent},
  {path:'Make',component:CarMakeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
