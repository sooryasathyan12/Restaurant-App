import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurntApiService } from '../services/restaurnt-api.service';

@Component({
  selector: 'app-view-restaurnt',
  templateUrl: './view-restaurnt.component.html',
  styleUrls: ['./view-restaurnt.component.css']
})
export class ViewRestaurntComponent implements OnInit {
   
  restId:any
  restBody:any


  constructor(private activatedRoute:ActivatedRoute,
    private restService:RestaurntApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      this.restId = data['id']
      
    })

    //api call
    this.restService.ViewRestaurnt(this.restId)
    .subscribe((result)=>{
      this.restBody=result
      console.log(this.restBody);
      
    })

  }

}
