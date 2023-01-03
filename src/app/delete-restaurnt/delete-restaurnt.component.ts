import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { RestaurntApiService } from '../services/restaurnt-api.service';

@Component({
  selector: 'app-delete-restaurnt',
  templateUrl: './delete-restaurnt.component.html',
  styleUrls: ['./delete-restaurnt.component.css']
})
export class DeleteRestaurntComponent implements OnInit {

  restId: any
  constructor(private activatedRoute: ActivatedRoute,
    private apiService:RestaurntApiService,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      console.log(data)
      this.restId = data['id']
    }
    )
 

   //call delete resturent from service
   this.apiService.deleteRestaurnt(this.restId)
   .subscribe(()=>{
      alert('Requested Restuarnt details deleted successfully!!!!')
      this.router.navigateByUrl('')
   })
  }

}
