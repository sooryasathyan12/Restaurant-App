import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurntApiService } from '../services/restaurnt-api.service';

@Component({
  selector: 'app-update-resturant',
  templateUrl: './update-resturant.component.html',
  styleUrls: ['./update-resturant.component.css']
})
export class UpdateResturantComponent implements OnInit {
   
  restId:any
  restBody:any
  reviews:any=[];



  constructor(private activatedRoute:ActivatedRoute,
    private restService:RestaurntApiService,private router:Router)  { }


  ngOnInit(): void {
    //get resturent id
    this.activatedRoute.params.subscribe((data)=>{
      this.restId = data['id']
      
    })
    //get resturnt details
    this.restService.ViewRestaurnt(this.restId)
    .subscribe((result)=>{
      this.restBody = result
      console.log(this.restBody);
      
    })


  }
  updaterestaurnt(form:any){
      let updaterestaurnt = {
        id: parseInt(form.value.id),
        name: form.value.rName,
        neighborhood: form.value.neighborhood,
        photograph: form.value.photograph,
        address:form.value.address,
        latlng:{
          lat:form.value.lat,
          lng:form.value.lng
  
  
        },
        cuisine_type:form.value.cuisine_type,
        operating_hours: {
          Monday: form.value.Monday,
          Tuesday: form.value.Tuesday,
          Wednesday: form.value.Wednesday,
          Thursday: form.value.Thursday,
          Friday: form.value.Friday,
          Saturday: form.value.Saturday,
          Sunday: form.value.Sunday
        },
        reviews:[
          {
            name:form.value.rvname,
            date:form.value.date,
            rating:parseInt(form.value.rating),
            comments:form.value.comments
          }
  
        ]
  
      }
       console.log(updaterestaurnt);
       this.restService.updaterestaurnt(this.restId,updaterestaurnt)
       .subscribe((data)=>{
         alert("Restaurnt Details updated successfully!!!")
         this.router.navigateByUrl("")
       })
       
  }

}
