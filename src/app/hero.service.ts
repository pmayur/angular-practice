import { Injectable } from '@angular/core';
import { HEROES } from './db/mock-heroes';
import { Hero } from './interfaces/hero';

interface HeroServiceInterface {
  getHeroes(): Hero[];
}

@Injectable({
  providedIn: 'root',
})
export class HeroService implements HeroServiceInterface {
  getHeroes = (): Hero[] => HEROES;
}
