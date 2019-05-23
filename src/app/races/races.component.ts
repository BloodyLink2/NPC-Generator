import { Component, OnInit } from '@angular/core';
import { Races } from '../races'
import { race } from 'rxjs';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})


export class RacesComponent implements OnInit {
  nameArray = ["Human", "Elves", "Dwarves", "Goblin", "Orc", "Demon", "Devil", "Dragon"]
  races: Races[] = [];
  raceName: string = "";
  isDisabled: Boolean = true;
  constructor() {
    
  }
  ngOnInit() {
    for(var i = 0; i < this.nameArray.length; i++){
      let race = new Races();
      race.id = i;
      race.name = this.nameArray[i];
      this.races.push(race);
    }
    this.raceName = this.nameArray[Math.round(Math.random() * (this.nameArray.length - 1) + 1)]
  }

  CustomizeRace(){
    this.isDisabled = !this.isDisabled;
    if(!this.isDisabled){
      this.raceName = "";
    }else{
      this.raceName = this.nameArray[Math.round(Math.random() * (this.nameArray.length - 1) + 1)]
    }
  }

  GenerateRace(){
    this.raceName = this.nameArray[Math.round(Math.random() * (this.nameArray.length - 1) + 1)]
  }

}

