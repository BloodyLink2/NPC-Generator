import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {

  genderList = [
    {name : "Male", value : "male"},
    {name : "Female", value : "female"} 
  ]

  constructor() { }

  ngOnInit() {
  }

}
