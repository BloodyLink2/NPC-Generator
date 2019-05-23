import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-origin',
  templateUrl: './origin.component.html',
  styleUrls: ['./origin.component.css']
})
export class OriginComponent implements OnInit {

  originList = [
    "Norse", "Greek", "Ancient Greek","Egyptian", "Arthurian", "Finnic", "Sámi","Celtic"
  ]
  origin:string;
  isDisabled: boolean = true;
  constructor() { }
  
  ngOnInit() {
    this.origin = this.originList[Math.round(Math.random() * (this.originList.length - 1) + 1)];
  }

  CustomiseOrigin(){
    this.isDisabled = !this.isDisabled;
    if(!this.isDisabled){
      this.origin = "";
    }else{
      this.origin = this.originList[Math.round(Math.random() * (this.originList.length - 1) + 1)];
    }
  }

  RandomiseOrigin(){
    this.origin = this.originList[Math.round(Math.random() * (this.originList.length - 1) + 1)];
  }

}
