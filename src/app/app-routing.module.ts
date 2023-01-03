import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurntComponent } from './add-restaurnt/add-restaurnt.component';
import { DeleteRestaurntComponent } from './delete-restaurnt/delete-restaurnt.component';
import { RestaurntlistComponent } from './restaurntlist/restaurntlist.component';
import { UpdateResturantComponent } from './update-resturant/update-resturant.component';
import { ViewRestaurntComponent } from './view-restaurnt/view-restaurnt.component';

const routes: Routes = [ 
   //path for  RestaurntlistComponent
{
  path:'',component:RestaurntlistComponent
},
//path view res comp
{
  path:'view-restaurnt/:id',component:ViewRestaurntComponent
},
//path for AddRestaurntComponent
{
  path:'Add-restaurnt',component:AddRestaurntComponent
},

// path for UpdateResturantComponent
{
  path:'update-restaurnt/:id'  ,component:UpdateResturantComponent
},

//path for deleting resturnt component
{
  path:'delete-restaurnt/:id' ,component:DeleteRestaurntComponent
}

];

  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
