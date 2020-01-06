import { Component, OnInit } from '@angular/core';
import { RepositoryService } from "./../repository.service";
import { Router ,ParamMap, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router, private repository:RepositoryService) { }

  public result;
  public types;
  public Imageurl = this.repository.Image_Url;
  public selectedtype;
  public Backurl = this.repository.Back_Url;
  public filtertext;
  ngOnInit() {
    this.selectedtype='';
    this.filtertext = '';
    this.getall()
    this.getalltypes()
  }

  public getall(){

    let type =  this.route.snapshot.queryParamMap.get('type')
    let url ;
    if(type){ url = 'getalltravelpages/?'+'type='+type; }else{  url=  'getalltravelpages/?'+'type='}
    

    this.repository.getData(url).subscribe(res=>{
      this.result = res as JSON;

    },   (error => {
      //this.message="Registration Failed, Try Again!";
      alert('error')
    })
    )
  }

  public getalltypes(){
    this.repository.getData('gettraveltype').subscribe(res=>{
      this.types = res[0] as JSON;

    },   (error => {
      //this.message="Registration Failed, Try Again!";
      alert('error')
    })
    )
  }

  public viewtravelpage(id){
    this.router.navigate(['/travelpage/'+id]);
  }

  public selecttype(type){
    // this.router.navigate(['/addnew/']);
    let link = 'home';
    this.selectedtype = type;
    this.router.navigate([`${link.split('?')[0]}`], { queryParams: {type: type}});

    this.repository.getData('getalltravelpages/?'+'type='+type).subscribe(res=>{
      this.result = res as JSON;

    },   (error => {
    })
    )

  }
}
