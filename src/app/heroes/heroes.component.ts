import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../resources/mock-heroes';

import { ipcRenderer } from 'electron';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes = HEROES;

  selectedHero: Hero;
  constructor() {}

  ngOnInit(): void {
  }

  onSelect(hero: Hero) {

    this.selectedHero = hero;
    // ipcRenderer.invoke("hero-ui-click", hero).then(obj => {
      // console.log(obj);
    // });
  }

}
