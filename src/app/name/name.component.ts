import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  firstNameList = ["Alyssa","Emerik","Gnash","Ingril"];
  lastNameList = ["Hawthorn", "Battlehorn", "of Himrich", "Kakoi"];
  firstName: string;
  lastName: string;
  fullName: string;
  isDisabled: boolean = true;
  constructor() { }

  ngOnInit() {
    this.fullName = this.firstNameList[Math.round(Math.random() * (this.firstNameList.length - 1) + 1)] + " " + this.lastNameList[Math.round(Math.random() * (this.lastNameList.length - 1) + 1)];
  }

  CustomizeName(){
    this.isDisabled = !this.isDisabled; 
    if(!this.isDisabled){
      this.fullName = "";
    }else{
      this.fullName = this.firstNameList[Math.round(Math.random() * (this.firstNameList.length - 1) + 1)] + " " + this.lastNameList[Math.round(Math.random() * (this.lastNameList.length - 1) + 1)];
    }
  }

  GenerateName(){
    this.firstName = this.firstNameList[Math.round(Math.random() * (this.firstNameList.length - 1) + 1)];
    this.lastName = this.lastNameList[Math.round(Math.random() * (this.lastNameList.length - 1) + 1)];
    this.fullName = this.firstName + " " + this.lastName;
  }

}
