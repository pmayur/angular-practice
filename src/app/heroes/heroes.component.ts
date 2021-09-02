import { Component, OnInit } from '@angular/core';
import { HEROES } from '../db/mock-heroes';
import { Hero } from '../interfaces/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = HEROES;
  selectedHero?: Hero;

  constructor() {}

  ngOnInit(): void {
    console.log('ngOnInit ran !');
  }

  onSelect(hero: Hero): void {
    console.log('Selected Hero: ',hero);
    this.selectedHero = hero;
  }
}
