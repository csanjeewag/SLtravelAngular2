

  import { Component, OnInit } from '@angular/core';
  import {RepositoryService  } from "./../repository.service";
  import { Router ,ParamMap, ActivatedRoute} from '@angular/router';
import { NgForOf } from '@angular/common';
  
  @Component({
    selector: 'app-servicepage',
    templateUrl: './servicepage.component.html',
    styleUrls: ['./servicepage.component.scss']
  })
  export class ServicepageComponent implements OnInit {
  
    constructor(private route: ActivatedRoute,private router: Router, private repository: RepositoryService) { }
  public result;
  public Imageurl= this.repository.Image_Url;
  public travelpages : any = [];
    ngOnInit() {
      let id =  this.route.snapshot.paramMap.get('id')
      this.viewpage(id)
    }
  
    public viewpage(id){
      this.result = this.repository.getData('getservicepage/'+id).subscribe(res=>{
        this.result = res[0] as JSON;
  
        this.gettravelpages(this.result.travelpages);
      },   (error => {
        //this.message="Registration Failed, Try Again!";
        alert('error')
      })
      )
    }

    public gettravelpages(pages){
      let id = 0
       while(pages[id]){
        this.gettravels(pages[id],id)
       
      id=id+1
       }
   
      
    }

    public gettravels(travelid,id){
      this.repository.getData('gettravelpage/'+travelid).subscribe(res=>{
        
        this.travelpages[id] = res
        
        
      },   (error => {
        //this.message="Registration Failed, Try Again!";
        // alert('error')
      })
      )

    }

    // public viewtravelpage(id){
    //   this.result = this.repository.getData('gettravelpage/'+id).subscribe(res=>{
        
  
    //   },   (error => {
    //     //this.message="Registration Failed, Try Again!";
    //     alert('error')
    //   })
    //   )
    // }

    public viewtravelpage(id){
      this.router.navigate(['/travelpage/'+id]);
    }
    
    
  }
  