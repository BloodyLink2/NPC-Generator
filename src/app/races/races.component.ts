import { Component, OnInit } from '@angular/core';
import { Races } from '../races'
import { race } from 'rxjs';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { Global } from '../global';


const httpOptions ={
  headers : new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
}

let settings: Global = new Global();

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})


export class RacesComponent implements OnInit {
 
  raceUrl:string = (settings.isLocal ? settings.localUrl : settings.hostUrl) + "select.php?action=races&lang=2";
  isDisabled: boolean = true;
  raceList: Array<Races> = [];
  value: string = "";
  id: number = 0;
  randonumber: number = 0;

  constructor(private http: HttpClient) { 
    this.getData();
  }

  ngOnInit() {
  }

  getData(){
    this.http.get<Races[]>(this.raceUrl, httpOptions).subscribe((res) => {
      this.raceList = res;
      this.randonumber = Math.round(Math.random() * (this.raceList.length - 1));
      this.raceList[this.randonumber].isSelected = true;
      this.value = this.raceList[this.randonumber].raceName;
      console.log(this.randonumber);
    });
  }

  SetValue(gender:string, id: number){
    this.value = gender;
    this.id = id;
  }
  Randomise(){
    for(var i = 0; i < this.raceList.length; i++){
      this.raceList[i].isSelected = false;
    }
    this.randonumber = Math.round(Math.random() * (this.raceList.length - 1));
    console.log(this.randonumber);
    this.raceList[this.randonumber].isSelected = true;
    this.value = this.raceList[this.randonumber].raceName;
    this.id = this.raceList[this.randonumber].id;
  }
  Edit(){
    this.isDisabled = !this.isDisabled;
  }

}

