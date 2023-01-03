import { Component, OnInit } from '@angular/core';
import { RestaurntApiService } from '../services/restaurnt-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private  apiservice:RestaurntApiService) { }

  ngOnInit(): void {
  }
search(event:any){
  // console.log(event.target.value);
  let searchTerm= event.target.value
 console.log(searchTerm);
this.apiservice.search.next(searchTerm)

  
}
}
