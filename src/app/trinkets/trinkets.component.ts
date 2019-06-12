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
  selector: 'app-trinkets',
  templateUrl: './trinkets.component.html',
  styleUrls: ['./trinkets.component.css']
})
export class TrinketsComponent implements OnInit {

  isSelected: boolean;
  trinkets: Array<Trinket> = [];
  trinketUrl:string = (settings.isLocal ? settings.localUrl : settings.hostUrl) + "select.php?action=trinkets&lang=2";
  randoNumber: number;
  value:string = "";
  id:number;

  constructor(private http: HttpClient) {
      this.getData();
   }

   getData(){
    this.http.get<Trinket[]>(this.trinketUrl, httpOptions).subscribe((res) => {
      this.trinkets = res;
      this.Randomise();
    });
    
  }

  SetValue(trinket:string, id: number){
    this.value = trinket;
    this.id = id;
  }

  Randomise(){
    this.randoNumber = Math.round(Math.random() * (this.trinkets.length - 1));
    this.value = this.trinkets[this.randoNumber].trinket;
    this.id = this.trinkets[this.randoNumber].id;
  }


  ngOnInit() {
  }

}

export interface Trinket{
    id:number;
    trinket:string;
    description:string;
}
