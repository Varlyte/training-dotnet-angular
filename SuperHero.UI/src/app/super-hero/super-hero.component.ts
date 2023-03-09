import { Component, Input, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SuperHero } from '../super-hero';

import { SuperHeroService } from '../super-hero.service';
import { EditHeroComponent } from '../edit-hero/edit-hero.component';

@Component({
  selector: 'app-super-hero',
  templateUrl: './super-hero.component.html',
  styleUrls: ['./super-hero.component.css'],
})

export class SuperHeroComponent {
  heroes: SuperHero[] = [];
  heroToEdit?: SuperHero;

  constructor(private superHeroService: SuperHeroService){}

  ngOnInit() : void {
    this.superHeroService.getSuperHeroes().subscribe((result: SuperHero[]) => (this.heroes = result));
  }

  updateHeroList(heroes: SuperHero[]){
    this.heroes = heroes;
  }

  initNewHero(){
    this.heroToEdit = new SuperHero();
  }

  editHero(hero: SuperHero){
    this.heroToEdit = hero;
  }
}
