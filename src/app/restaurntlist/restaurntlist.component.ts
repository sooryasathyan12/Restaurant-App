import { Component, OnInit } from '@angular/core';
import { RestaurntApiService } from '../services/restaurnt-api.service';

@Component({
  selector: 'app-restaurntlist',
  templateUrl: './restaurntlist.component.html',
  styleUrls: ['./restaurntlist.component.css']
})
export class RestaurntlistComponent implements OnInit {

  Restaurntlists:any;
  lDate:any;
  filterstring:any;
  constructor(private restApi: RestaurntApiService) { }

  ngOnInit(): void {
    //asynchronous
    this.restApi.allRestaurntList()
    .subscribe((result)=>{
      console.log(result);
      this.Restaurntlists = result
      
    })
    //  this.lDate= new Date()
     this.restApi.search.subscribe((data)=>{
      this.filterstring =data
      console.log(this.filterstring);
      

     })
     
  }

}
