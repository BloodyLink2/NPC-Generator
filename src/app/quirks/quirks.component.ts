import { Component, OnInit } from '@angular/core';
import { Global } from '../global';
import{HttpClient,HttpHeaders} from '@angular/common/http';

const httpOptions ={
  headers : new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
}

let settings: Global = new Global();

@Component({
  selector: 'app-quirks',
  templateUrl: './quirks.component.html',
  styleUrls: ['./quirks.component.css']
})
export class QuirksComponent implements OnInit {
  id: number;
  randoNumber: number;
  isDisabled: boolean = true;
  isSelected: boolean; 
  value: string = "";
  quirks: Array<Quirks> = [];
  quirksUrl:string = (settings.isLocal ? settings.localUrl : settings.hostUrl) + "select.php?action=quirks&lang=2";

  constructor(private http: HttpClient) {
    this.getData();
  }

  ngOnInit() {
  }

  getData(){
    this.http.get<Quirks[]>(this.quirksUrl, httpOptions).subscribe((res) => {
      this.quirks = res;
      this.Randomise();
      console.log(this.quirks);
    });
  }

  Randomise(){
    this.randoNumber = Math.round(Math.random() * (this.quirks.length - 1));
    this.value = this.quirks[this.randoNumber].quirk;
    this.id = this.quirks[this.randoNumber].id;
  }

}

export interface Quirks{
  id: number;
  quirk: string;
  description: string;
}
