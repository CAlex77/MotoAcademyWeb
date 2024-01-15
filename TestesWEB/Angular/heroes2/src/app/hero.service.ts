import { Injectable } from '@angular/core';
import { HEROES } from './heroes/mocks/Hero.moks';
import { Hero } from './Hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService){}

  getHeroesMock():Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add("Hero Service: fetched heroes");
    return heroes
  }
  getHero(id: number):Observable<Hero> {
    const hero = HEROES.find(heroValue => heroValue.id === id)!;
    this.messageService.add(`HeroService: Fetched hero id=${id}`)
    return of(hero)
  }
}
