import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {
  ageDetails = [
    {name: "0", value: "0"},
    {name: "1", value: "10"},
    {name: "2", value: "20"},
    {name: "3", value: "30"},
    {name: "4", value: "40"},
    {name: "5", value: "50"},
    {name: "6", value: "60"},
    {name: "7", value: "70"},
    {name: "8", value: "80"},
    {name: "9", value: "90"},
    {name: "10", value: "100"},
  ]
  constructor() { }

  ngOnInit() {
    
  }

}
