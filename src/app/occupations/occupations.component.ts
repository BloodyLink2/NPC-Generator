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
  selector: 'app-occupations',
  templateUrl: './occupations.component.html',
  styleUrls: ['./occupations.component.css']
})
export class OccupationsComponent implements OnInit {

  occupations: Array<Occupations> = [];
  value: string;
  id: number;
  randoNumber: number;
  url: string = (settings.isLocal ? settings.localUrl : settings.hostUrl) + "select.php?action=occupations&lang=2";

  constructor(private http: HttpClient) { 
    this.GetData();
  }

  GetData(){
    this.http.get<Occupations[]>(this.url, httpOptions).subscribe((res) => {
      this.occupations = res;
      this.Randomise();
    });
    
  }

  SetValue(trinket:string, id: number){
    this.value = trinket;
    this.id = id;
  }

  Randomise(){
    this.randoNumber = Math.round(Math.random() * (this.occupations.length - 1));
    this.value = this.occupations[this.randoNumber].occupation;
    this.id = this.occupations[this.randoNumber].id;
  }


  ngOnInit() {
  }

}

export interface Occupations{
  id: number;
  occupation: string;
  description: string;
}
