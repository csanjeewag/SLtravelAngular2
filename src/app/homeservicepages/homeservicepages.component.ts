

  import { Component, OnInit } from '@angular/core';
  import { RepositoryService } from "./../repository.service";
  import { Router ,ParamMap, ActivatedRoute} from '@angular/router';
  
  @Component({
    selector: 'app-homeservicepages',
    templateUrl: './homeservicepages.component.html',
    styleUrls: ['./homeservicepages.component.scss']
  })
  export class HomeservicepagesComponent implements OnInit {
  
    constructor(private route: ActivatedRoute,private router: Router, private repository:RepositoryService) { }
  
    public result;
    public types;
    public Imageurl = this.repository.Image_Url;
    public selectedtype;
    public Backurl = this.repository.Back_Url;
    ngOnInit() {
      this.selectedtype = ''
      this.getall()
      this.getalltypes()
    }
  
    public getall(){

      let type =  this.route.snapshot.queryParamMap.get('type')
      let url ;
      if(type){ url = 'getallservicepages/?'+'type='+type; }else{  url=  'getallservicepages/?'+'type='}

      this.result = this.repository.getData(url).subscribe(res=>{
        this.result = res as JSON;
  
      },   (error => {
        //this.message="Registration Failed, Try Again!";
        alert('error')
      })
      )
    }
  
    public getalltypes(){
      this.repository.getData('getservicetype').subscribe(res=>{
        this.types = res[0].type as JSON;
  
      },   (error => {
        //this.message="Registration Failed, Try Again!";
        alert('error')
      })
      )
    }
  
    public viewtravelpage(id){
      this.router.navigate(['/servicepage/'+id]);
    }
  
    public selecttype(type){
      // this.router.navigate(['/addnew/']);
      let link = 'homeservice';
      this.selectedtype = type;
      this.router.navigate([`${link.split('?')[0]}`], { queryParams: {type: type}});
  
      this.repository.getData('getallservicepages/?'+'type='+type).subscribe(res=>{
        this.result = res as JSON;
  
      },   (error => {
      })
      )
  
    }
  }
  