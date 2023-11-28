import { Injectable } from '@angular/core';
import { HEROES } from './heroes/mocks/Hero.moks';
import { Hero } from './Hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService){}

  getHeroesMock (): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add("Hero Service: fetched heroes");
    return heroes
  }
}
