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
  value: string = "";
  id: number;
  randoType: number = 0;
  randoNumber: number = 0;
  lastPickedType: string = "";
  appearanceList: Array<Appearance> = [];
  url: string = (settings.isLocal ? settings.localUrl : settings.hostUrl) + "select.php?action=appearance&lang=2&type=build";
  typeUrl: string = (settings.isLocal ? settings.localUrl : settings.hostUrl) + "type.php?action=appearance&lang=2";
  selectedTypes: Array<number> = [];
  constructor(private http: HttpClient) { 
    this.GetTypeList()
    
}

  async GetData(typeList: Array<number>)   {
    for(var i = 0; i < typeList.length; i++){
      this.url = (settings.isLocal ? settings.localUrl : settings.hostUrl) + "select.php?action=appearance&lang=2&type=" + typeList[i];
      const ret = await this.http.get<Appearance[]>(this.url, httpOptions).pipe().toPromise();
      this.randoNumber = this.GetRandomNumberForData();
      if(i == 0){
        this.value = ret[this.randoNumber].appearance
        this.id = ret[this.randoNumber].id;
      }else{
        this.value += ", " + ret[this.randoNumber].appearance
        this.id += ret[this.randoNumber].id;
      }
    }
    
  }

  GetTypeList(){
    this.typeUrl = (settings.isLocal ? settings.localUrl : settings.hostUrl) + "select.php?action=type&lang=2";
    this.http.get<string[]>(this.typeUrl, httpOptions).subscribe((res) => {
      this.typeList = res;
      for(var i = 0; i < 3; i++){
        this.randoType = this.GetRandomNumberForTypes()
        this.selectedTypes.push(this.randoType);
      }
      for(var i = 0; i < this.selectedTypes.length; i++){
        console.log(this.selectedTypes[i]);
      }
      const data = this.GetData(this.selectedTypes);
      
    });
    
  }
  
  GetRandomNumberForData(){
    this.randoNumber = Math.round(Math.random() * (this.appearance.length - 1)) + 1;
    for(var i = 0; i < this.appearance.length; i++){
      if(this.selectedTypes[i] == this.randoType){
        this.GetRandomNumberForTypes();
      }
    }
    return this.randoType;
  }

  GetRandomNumberForTypes(){
    this.randoType = Math.round(Math.random() * (this.typeList.length - 1)) + 1 ;
    for(var i = 0; i < this.selectedTypes.length; i++){
      if(this.selectedTypes[i] == this.randoType){
        this.GetRandomNumberForTypes();
      }
    }
    return this.randoType;
  }
  

  SetValue(trinket:string, id: number){
    this.value = trinket;
    this.id = id;
  }

  Randomise(){
    this.GetTypeList();
  }


  ngOnInit() {
  }

}

export interface Appearance{
  id: number;
  appearance: string;
  description: string;
}
