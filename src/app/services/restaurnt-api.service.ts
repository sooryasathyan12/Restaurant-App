import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurntApiService {

  search=new BehaviorSubject("")

  constructor(private api:HttpClient) { }   //dependency injection
  
  //to get all restaurnt details api call
  allRestaurntList(){
    //api call
   return this.api.get('http://localhost:3000/restaurants')
  }
  //get only user req restaurent
  ViewRestaurnt(restId:any){
    return this.api.get('http://localhost:3000/restaurants/'+restId)
  }
  //add a new resturent api -post
  addRestaurnt(restBody:any){
    return this.api.post('http://localhost:3000/restaurants/',restBody)

  }
  //update a perticular resturnt api - put
  updaterestaurnt(restId:any,restBody:any){
    return this.api.put('http://localhost:3000/restaurants/'+restId,restBody)

  }
  //delete a perticular resturnt api - delete
  deleteRestaurnt(restId:any){
    return this.api.delete('http://localhost:3000/restaurants/'+restId)

  }

}
