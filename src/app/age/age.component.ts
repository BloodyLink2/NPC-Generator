import { Component, OnInit } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Age} from '../age';

const httpOptions ={
  headers : new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
}

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {
  ages: Array<Age>;
  ageUrl:string = "api/crud/select.php?tableName=age&lang=2";
  value:string = "";
  ageid:number = 0;
  isDisabled: boolean = true;
  randoNumber: number = 0;
  constructor(private http: HttpClient) {     
    this.getData();
  }

  ngOnInit() {
    
  }

  getData(){
    this.http.get<Age[]>(this.ageUrl, httpOptions).subscribe((res) => {
      this.ages = res;
      this.randoNumber = Math.round(Math.random() * (this.ages.length - 1));
      this.value = this.ages[this.randoNumber].age;
      this.ages[this.randoNumber].isSelected = true;
    });
    
  }

  Edit(){
    this.isDisabled = !this.isDisabled;
  }

  SetValue(age:string, id: number){
    this.value = age;
    this.ageid = id;
  }

  Randomise(){
    for(var i = 0; i < this.ages.length; i++){
      this.ages[i].isSelected = false;
    }
    this.randoNumber = Math.round(Math.random() * (this.ages.length - 1));
    this.value = this.ages[this.randoNumber].age;
    this.ageid = this.ages[this.randoNumber].id;
    this.ages[this.randoNumber].isSelected = true;
  }

}
