import { Component, OnInit } from '@angular/core';
import { RepositoryService } from "./../../repository.service";

@Component({
  selector: 'app-mainnavbar',
  templateUrl: './mainnavbar.component.html',
  styleUrls: ['./mainnavbar.component.scss']
})
export class MainnavbarComponent implements OnInit {

  constructor( private repository : RepositoryService) { }
  public backurl;

  ngOnInit() {
    this.backurl = this.repository.Back_Url;
  }

}
