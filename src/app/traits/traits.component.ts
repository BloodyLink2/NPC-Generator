import { Component, OnInit } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
const httpOptions ={
  headers : new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
}

@Component({
  selector: 'app-traits',
  templateUrl: './traits.component.html',
  styleUrls: ['./traits.component.css']
})
export class TraitsComponent implements OnInit {

  traits: Array<Traits>;
  traitUrl:string = "http://localhost:81/NPC-Api/api/crud/select.php?tableName=personality_traits&lang=2";
  value:string = "";
  id:string = "";
  isDisabled: boolean = true;
  randoNumber: number = 0;
  randoNumber2: number = 0;
  randoNumber3: number = 0;
  constructor(private http: HttpClient) {     
    this.getData();
  }

  ngOnInit() {
    
  }

  getData(){
    this.http.get<Traits[]>(this.traitUrl, httpOptions).subscribe((res) => {
      this.traits = res;
      this.randoNumber = Math.round(Math.random() * (this.traits.length - 1));
      this.randoNumber2 = Math.round(Math.random() * (this.traits.length - 1));
      this.randoNumber3 = Math.round(Math.random() * (this.traits.length - 1));
      this.value = this.traits[this.randoNumber].trait + ", " + this.traits[this.randoNumber2].trait + ", " + this.traits[this.randoNumber3].trait;
      this.id = this.traits[this.randoNumber].id + ", " + this.traits[this.randoNumber2].id + ", " + this.traits[this.randoNumber3].id;
    });
    
  }

  Edit(){
    this.isDisabled = !this.isDisabled;
  }

  SetValue(trait:string, id: string){
    this.value = trait;
    this.id = id;
  }

  Randomise(){
    this.randoNumber = Math.round(Math.random() * (this.traits.length - 1));
    this.randoNumber2 = Math.round(Math.random() * (this.traits.length - 1));
    this.randoNumber3 = Math.round(Math.random() * (this.traits.length - 1));
    if(this.randoNumber == this.randoNumber2 || this.randoNumber == this.randoNumber3){
      this.randoNumber = Math.round(Math.random() * (this.traits.length - 1));
    }else if(this.randoNumber2 == this.randoNumber || this.randoNumber2 == this.randoNumber3){
      this.randoNumber2 = Math.round(Math.random() * (this.traits.length - 1));
    }else{
      this.randoNumber3 = Math.round(Math.random() * (this.traits.length - 1));
    }
    this.value = this.traits[this.randoNumber].trait + ", " + this.traits[this.randoNumber2].trait + ", " + this.traits[this.randoNumber3].trait;
    this.id = this.traits[this.randoNumber].id.toString() + ", " + this.traits[this.randoNumber2].id.toString() + ", " + this.traits[this.randoNumber3].id;
  }

}

export interface Traits{
  id: number;
  trait: string;
  description: string;
}
