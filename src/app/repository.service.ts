import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient,) { }

  //public url="https://jsonplaceholder.typicode.com/users";
   public url="http://localhost:8080";
   public Image_Url = this.url+'/Images/';
   public Back_Url = this.url+'/special/';

  public getData(route: string) {
   
    return this.http.get(this.createCompleteRoute(route, this.url));

  }

  public postData(route: string, body) {


    return this.http.post(this.createCompleteRoute(route, this.url), body);


  }
  public postFile(route: string, body) {
    
    return this.http.post(this.createCompleteRoutefile(route, this.url), body, this.generateHeadersfile());


  }

  

  private createCompleteRoute(route: string, envAddress: string) {

    return `${envAddress}/${route}`;
  }
  private createCompleteRoutefile(route: string, envAddress: string) {
    return `${envAddress}/${route}`;
  }
  private generateHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' 
      })
    }

  }
  private generateHeadersfile() {
    return {
      headers: new HttpHeaders({
        'Authorization': 'bearer ' ,
        // + localStorage.getItem('token'),
        'enctype': 'multipart/form-data'
      })
    }

  }
}
