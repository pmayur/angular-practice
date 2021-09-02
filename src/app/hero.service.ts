import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from '../util/db/mock-heroes';
import { Hero } from '../util/interfaces/hero';
import { MessageService } from './message.service';

interface HeroServiceInterface {
  getHeroes(): Observable<Hero[]>;
}

@Injectable({
  providedIn: 'root',
})

export class HeroService implements HeroServiceInterface {
  constructor(private messageService: MessageService) {}

  getHeroes = (): Observable<Hero[]> => {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  };
}
