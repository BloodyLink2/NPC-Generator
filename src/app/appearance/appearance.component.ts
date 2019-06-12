import { Component, OnInit } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { Global } from '../global';

const httpOptions ={
  headers : new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
}

let settings: Global = new Global();

@Component({
  selector: 'app-appearance',
  templateUrl: './appearance.component.html',
  styleUrls: ['./appearance.component.css']
})
export class AppearanceComponent implements OnInit {

  typeList: Array<string> = [];
  appearance: Array<Appearance> = [];
  value: string;
  id: number;
  randoType: number;
  randoNumber: number;
  lastPickedType: string = "";
  url: string = (settings.isLocal ? settings.localUrl : settings.hostUrl) + "select.php?action=appearance&lang=2&type=build";
  typeUrl: string = (settings.isLocal ? settings.localUrl : settings.hostUrl) + "select.php?action=appearance&lang=2&type=build";

  constructor(private http: HttpClient) { 
    this.GetTypeList()
    
}

  GetData(type: string){
    (settings.isLocal ? settings.localUrl : settings.hostUrl) + "select.php?action=appearance&lang=2&type=" + type;
    this.http.get<Appearance[]>(this.url, httpOptions).pipe().subscribe((res) => {
      this.appearance = res;
      this.Randomise();
    });
    
  }

  GetTypeList(){
    this.typeUrl = (settings.isLocal ? settings.localUrl : settings.hostUrl) + "type.php?action=appearance";
    this.http.get<string[]>(this.url, httpOptions).subscribe((res) => {
      this.typeList = res;
      for(var i = 0; i < 3; i++){
        this.randoType = Math.round(Math.random() * (this.typeList.length - 1));
        if(this.typeList[this.randoType] != this.lastPickedType){
        this.GetData(this.typeList[this.randoType]);
        this.lastPickedType = this.typeList[this.randoType];
        }
        else{
        this.randoType = Math.round(Math.random() * (this.typeList.length - 1));
        this.GetData(this.typeList[this.randoType]);
        this.lastPickedType = this.typeList[this.randoType];
      }
    }
    });

  }

  SetValue(trinket:string, id: number){
    this.value = trinket;
    this.id = id;
  }

  Randomise(){
    this.randoNumber = Math.round(Math.random() * (this.appearance.length - 1));
    this.value += this.appearance[this.randoNumber].appearance + ",";
    this.id = this.appearance[this.randoNumber].id;
  }


  ngOnInit() {
  }

}

export interface Appearance{
  id: number;
  appearance: string;
  description: string;
}
