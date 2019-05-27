import { Component, OnInit } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';

const httpOptions ={
  headers : new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
}


@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})


export class GenderComponent implements OnInit {

  genderUrl:string = "api/crud/select.php?tableName=gender&lang=2";
  isDisabled: boolean = true;
  genderList: Array<Gender> = [];
  value: string = "";
  id: number = 0;
  randonumber: number = 0;

  constructor(private http: HttpClient) { 
    this.getData();
  }

  ngOnInit() {
  }

  getData(){
    this.http.get<Gender[]>(this.genderUrl, httpOptions).subscribe((res) => {
      this.genderList = res;
      this.randonumber = Math.round(Math.random() * (this.genderList.length - 1));
      this.value = this.genderList[this.randonumber].gender;
      this.genderList[this.randonumber].isSelected = true;
      console.log(this.randonumber);
    });
  }

  SetValue(gender:string, id: number){
    this.value = gender;
    this.id = id;
  }
  Randomise(){
    for(var i = 0; i < this.genderList.length; i++){
      this.genderList[i].isSelected = false;
    }
    this.randonumber = Math.round(Math.random() * (this.genderList.length - 1));
    console.log(this.randonumber);
    this.genderList[this.randonumber].isSelected = true;
    this.value = this.genderList[this.randonumber].gender;
    this.id = this.genderList[this.randonumber].id;
  }
  Edit(){
    this.isDisabled = !this.isDisabled;
  }
}

export interface Gender {
  id: number;
  gender: string;
  isSelected: boolean;
}
