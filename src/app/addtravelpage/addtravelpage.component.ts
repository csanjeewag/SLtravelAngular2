import { Component, OnInit } from '@angular/core';
import { RepositoryService } from "./../repository.service";
import { FormControl, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtravelpage',
  templateUrl: './addtravelpage.component.html',
  styleUrls: ['./addtravelpage.component.scss']
})
export class AddtravelpageComponent implements OnInit {

  constructor(private router: Router, private repository : RepositoryService) { }

  public Form: FormGroup;
  public FileImage :Array<File> = [];
  public ImageUrl;

  public ImageUrls: Array<string> = [];
  public FileImages: Array<File> = [];

  public types;
  
  ngOnInit() {
    this.getalltypes()
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

    this.repository.postFile('addtravelpage',formData).subscribe(res=>{
      this.result = res;
      alert('add new page!')
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
}
