import { Component, OnInit } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';

const httpOptions ={
  headers : new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
}

@Component({
  selector: 'app-origin',
  templateUrl: './origin.component.html',
  styleUrls: ['./origin.component.css']
})
export class OriginComponent implements OnInit {

  origins = [{id: 1, origin: "Norse", isSelected: false},
  {id: 2, origin: "Greek", isSelected: false},
  {id: 3, origin: "Ancient Greek", isSelected: false},
  {id: 4, origin: "Egyptian", isSelected: false},
  {id: 5, origin: "Arthurian", isSelected: false},
  {id: 6, origin: "Finnic", isSelected: false},
  {id: 7, origin: "Sámi", isSelected: false},
  {id: 8, origin: "Celtic", isSelected: false}
  ]
 
  originUrl:string = "http://localhost:81/NPC-Api/api/crud/select.php?tableName=origin&lang=2";
  isDisabled: boolean = true;
  originList: Array<Origin> = [];
  value: string = "";
  id: number = 0;
  randonumber: number = 0;

  constructor(private http: HttpClient) { 
    this.getData();
  }

  ngOnInit() {
  }

  getData(){
    // this.http.get<Origin[]>(this.originUrl, httpOptions).subscribe((res) => {
      this.originList = this.origins;
      this.randonumber = Math.round(Math.random() * (this.originList.length - 1));
      this.value = this.originList[this.randonumber].origin;
      this.originList[this.randonumber].isSelected = true;
      console.log(this.randonumber);
    // });
  }

  SetValue(gender:string, id: number){
    this.value = gender;
    this.id = id;
  }
  Randomise(){
    for(var i = 0; i < this.originList.length; i++){
      this.originList[i].isSelected = false;
    }
    this.randonumber = Math.round(Math.random() * (this.originList.length - 1));
    console.log(this.randonumber);
    this.originList[this.randonumber].isSelected = true;
    this.value = this.originList[this.randonumber].origin;
    this.id = this.originList[this.randonumber].id;
  }
  Edit(){
    this.isDisabled = !this.isDisabled;
  }

}

export interface Origin{
  id: number;
  origin: string;
  isSelected: boolean;
}