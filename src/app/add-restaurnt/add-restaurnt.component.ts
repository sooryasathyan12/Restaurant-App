import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { RestaurntApiService } from '../services/restaurnt-api.service';

@Component({
  selector: 'app-add-restaurnt',
  templateUrl: './add-restaurnt.component.html',
  styleUrls: ['./add-restaurnt.component.css']
})
export class AddRestaurntComponent implements OnInit {

  id: any
  rName: any
  neighborhood: any
  photograph: any
  Monday: any
  Tuesday: any
  Wednesday: any
  Thursday: any
  Friday: any
  Saturday: any
  Sunday: any
  address:any
  lat:any
  lng:any
  cuisine_type:any
  rvname:any
  date:any
  rating:any
  comments:any
  reviewArray:any = []


  constructor( private restapi:RestaurntApiService,private router:Router) { }

  ngOnInit(): void {
  }
  //USERDEFINED FUNCTION
  addresaurnt() {
    let addProduct = {
      id: parseInt(this.id),
      name: this.rName,
      neighborhood: this.neighborhood,
      photograph: this.photograph,
      address:this.address,
      latlng:{
        lat:this.lat,
        lng:this.lng


      },
      cuisine_type:this.cuisine_type,
      operating_hours: {
        Monday: this.Monday,
        Tuesday: this.Tuesday,
        Wednesday: this.Wednesday,
        Thursday: this.Thursday,
        Friday: this.Friday,
        Saturday: this.Saturday,
        Sunday: this.Sunday
      },
      reviews:[
        {
          name:this.rvname,
          date:this.date,
          rating:parseInt(this.rating),
          comments:this.comments
        }

      ]

    }

    console.log(addProduct);
    this.restapi.addRestaurnt(addProduct)
    .subscribe(()=>{
      alert('New Restaurnt added successfully!!!!')
      this.router.navigateByUrl('')
    })


  }

}


