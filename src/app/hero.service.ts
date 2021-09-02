import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from './db/mock-heroes';
import { Hero } from './interfaces/hero';

interface HeroServiceInterface {
  getHeroes(): Observable<Hero[]>;
}

@Injectable({
  providedIn: 'root',
})

export class HeroService implements HeroServiceInterface {

  getHeroes = (): Observable<Hero[]> => {
    const heroes = of(HEROES);
    return heroes;
  }

}
