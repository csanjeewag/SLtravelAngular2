 import { Component, OnInit } from '@angular/core';
  import { RepositoryService } from "./../repository.service";
  import { FormControl, FormGroup, Validators, EmailValidator } from '@angular/forms';
  import { Router ,ActivatedRoute} from '@angular/router';
  

  @Component({
    selector: 'app-updatetravelpage',
    templateUrl: './updatetravelpage.component.html',
    styleUrls: ['./updatetravelpage.component.scss']
  })
  export class UpdatetravelpageComponent implements OnInit {
  
    constructor(private route: ActivatedRoute, private router: Router, private repository : RepositoryService) { }
  
    public Form: FormGroup;
    public FileImage :Array<File> = [];
    public ImageUrl;
    public Imageurl = this.repository.Image_Url;
  
    public ImageUrls: Array<string> = [];
    public FileImages: Array<File> = [];
  
    public types;
    public page;
    public updateid;
    public servicepages;
    
    ngOnInit() {
      this.getalltypes()
      this.viewpage()
      this.getallservicepage()
      
      this.Form = new FormGroup({
        topic: new FormControl('',[Validators.required]),
        type: new FormControl('',[Validators.required]),
        subtopic: new FormControl('',[Validators.required]),
        username: new FormControl('',[Validators.required]),
        dictrict: new FormControl('',[Validators.required]),
        city: new FormControl('',[Validators.required]),
        para1: new FormControl('',[Validators.required]),
        para2: new FormControl('',[Validators.required]),
        para3: new FormControl('',[Validators.required]),
        read1_tpoic: new FormControl('',[Validators.required]),
        read1_para: new FormControl('',[Validators.required]),
        read2_tpoic: new FormControl('',[Validators.required]),
        read2_para: new FormControl('',[Validators.required]),
        read3_tpoic: new FormControl('',[Validators.required]),
        read3_para: new FormControl('',[Validators.required]),
        Date: new FormControl('',[Validators.required]),
        p1:  new FormControl('',[Validators.required]),

        sp1:  new FormControl('',[Validators.required]),
        sp2:  new FormControl('',[Validators.required]),
        sp3:  new FormControl('',[Validators.required]),
        sp4:  new FormControl('',[Validators.required]),
        sp5:  new FormControl('',[Validators.required]),
        sp6:  new FormControl('',[Validators.required]), 
       
  
       })
     
    }
    public validateControl(controlName: string) {
      if (this.Form.controls[controlName].invalid && this.Form.controls[controlName].touched)
        return true;
  
      return false;
    }
  
    public hasError(controlName: string, errorName: string) {
      if (this.Form.controls[controlName].hasError(errorName))
        return true;
  
      return false;
    }
    public result;
  
    public sendform(result){
  
     
      let formData = new FormData();
      formData.append('id',this.updateid);
      formData.append('topic', result.topic);
      formData.append('type', result.type);
      formData.append('subtopic', result.subtopic);
      formData.append('username', result.username);
      formData.append('dictrict', result.dictrict);
      formData.append('city', result.city);
      formData.append('para1', result.para1);
      formData.append('para2', result.para2);
      formData.append('para3', result.para3);
      formData.append('read1_tpoic', result.read1_tpoic);
      formData.append('read1_para', result.read1_para);
      formData.append('read2_tpoic', result.read2_tpoic);
      formData.append('read2_para', result.read2_para);
      formData.append('read3_tpoic', result.read3_tpoic);
      formData.append('read3_para', result.read3_para);
      formData.append('p1', this.FileImages[1]);
      formData.append('p2', this.FileImages[2]);
      formData.append('p3', this.FileImages[3]);

      formData.append('sp1', result.sp1);
      formData.append('sp2', result.sp2);
      formData.append('sp3', result.sp3);
      formData.append('sp4', result.sp4);
      formData.append('sp5', result.sp5);
      formData.append('sp6', result.sp6);

      let id3=0
      while(this.FileImage[id3]){
        formData.append('image', this.FileImage[id3]);
        id3=id3+1
      }
      // if (this.FileImage[0] != null) { formData.append('image', this.FileImage[0]); }
      // if (this.FileImage[1] != null) { formData.append('image', this.FileImage[1]); }
      // if (this.FileImage[2] != null) { formData.append('image', this.FileImage[2]); }
      // if (this.FileImage[3] != null) { formData.append('image', this.FileImage[3]); }
      // if (this.FileImage[4] != null) { formData.append('image', this.FileImage[4]); }
  
      this.repository.postFile('updatetravelpage',formData).subscribe(res=>{
        this.result = res;
        alert('updated')
      },   (error => {
        
        alert('error')
      })
      )
    }
  
    onFileChange(file : FileList,id:number) {
      
  
      this.FileImages[id] = file.item(0);
     //selected image viewing
      var reader = new FileReader();
      reader.onload = (event:any) => {
         this.ImageUrls[id] = event.target.result;
    
       
      }
       reader.readAsDataURL(this.FileImages[id]);
    }
  
    onFileChanges(file : FileList) {
     let id1=0
      while(file){   
        if(file.item(id1)){
          this.FileImage[id1] = file.item(id1);
        }else{
          break;
        }
        id1=id1+1;
      }
      // this.FileImage[0] = file.item(0);
      // this.FileImage[1] = file.item(1);
      // this.FileImage[2] = file.item(2);
      // this.FileImage[3] = file.item(3);
      // this.FileImage[4] = file.item(4);
      // this.FileImage[5] = file.item(5);
   
      var reader = new FileReader();
      reader.onload = (event:any) => {
         this.ImageUrl = event.target.result;
    
       
      }
      let id2 = 0;
      while(id2<id1){
        reader.readAsDataURL(this.FileImage[id2]);
        id2=id2+1;
      }
      // reader.readAsDataURL(this.FileImage[0]);
      // reader.readAsDataURL(this.FileImage[1]);
      // reader.readAsDataURL(this.FileImage[2]);
      // reader.readAsDataURL(this.FileImage[3]);
      // reader.readAsDataURL(this.FileImage[4]);
      // reader.readAsDataURL(this.FileImage[5]);
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

    public getallservicepage(){
      this.repository.getData('getallservicepage').subscribe(res=>{
        this.servicepages = res as JSON;
  
      },   (error => {
        //this.message="Registration Failed, Try Again!";
        alert('error')
      })
      )
    }

    public viewpage(){
       let id =  this.route.snapshot.paramMap.get('id')
      // let id = '5cd5cfad798c45814c4c8c13';
      this.updateid = id;
      this.result = this.repository.getData('gettravelpage/'+id).subscribe(res=>{
        this.page = res[0] as JSON;
        this.fillForm();
  
      },   (error => {
        //this.message="Registration Failed, Try Again!";
        alert('error')
      })
      )
    }

    public fillForm(){
      this.Form.controls['topic'].setValue(this.page.topic);
      this.Form.controls['type'].setValue(this.page.type);
      this.Form.controls['subtopic'].setValue(this.page.subtopic);
      this.Form.controls['username'].setValue(this.page.username);
      this.Form.controls['dictrict'].setValue(this.page.location.dictrict);
      this.Form.controls['city'].setValue(this.page.location.city);
      this.Form.controls['para1'].setValue(this.page.para1);
      this.Form.controls['para2'].setValue(this.page.para2);
      this.Form.controls['para3'].setValue(this.page.para3);
      this.Form.controls['read1_tpoic'].setValue(this.page.read1.topic);
      this.Form.controls['read1_para'].setValue(this.page.read1.para);
      this.Form.controls['read2_tpoic'].setValue(this.page.read2.topic);
      this.Form.controls['read2_para'].setValue(this.page.read2.para);
      this.Form.controls['read3_tpoic'].setValue(this.page.read3.topic);
      this.Form.controls['read3_para'].setValue(this.page.read3.para);
      // this.Form.controls['p1'].setValue(this.page.read1.img);
      // this.Form.controls['p2'].setValue(this.page.read1.img);
      // this.Form.controls['p3'].setValue(this.page.read1.img);

      this.Form.controls['sp1'].setValue(this.page.servicepages[0]);
      this.Form.controls['sp2'].setValue(this.page.servicepages[1]);
      this.Form.controls['sp3'].setValue(this.page.servicepages[2]);
      this.Form.controls['sp4'].setValue(this.page.servicepages[3]);
      this.Form.controls['sp5'].setValue(this.page.servicepages[4]);
      this.Form.controls['sp6'].setValue(this.page.servicepages[5]);
    }

  }
  
  