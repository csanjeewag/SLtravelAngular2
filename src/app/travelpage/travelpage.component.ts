import { Component, OnInit } from '@angular/core';
import {RepositoryService  } from "./../repository.service";
import { Router ,ParamMap, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-travelpage',
  templateUrl: './travelpage.component.html',
  styleUrls: ['./travelpage.component.scss']
})
export class TravelpageComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router, private repository: RepositoryService) { }
public result;
public Imageurl= this.repository.Image_Url;
public servicepages:  any = [];
  ngOnInit() {
    let id =  this.route.snapshot.paramMap.get('id')
    this.viewpage(id)
  }

  public viewpage(id){
    this.result = this.repository.getData('gettravelpage/'+id).subscribe(res=>{
      this.result = res[0] as JSON;
      this.getservicepages(this.result.servicepages);
    },   (error => {
      //this.message="Registration Failed, Try Again!";
      alert('error')
    })
    )
  }


  public getservicepages(pages){
    let id = 0
     while(pages[id]){
      this.getservices(pages[id],id)
      
     
    id=id+1
     }
 
    
  }

  public getservices(serviceid,id){
    this.repository.getData('getservicepage/'+serviceid).subscribe(res=>{
      
      this.servicepages[id] = res
      
      console.log(this.servicepages[id])
      console.log(res)
    },   (error => {
      //this.message="Registration Failed, Try Again!";
      // alert('error')
    })
    )

  }

  public viewtravelpage(id){
    this.router.navigate(['/servicepage/'+id]);
  }
}
