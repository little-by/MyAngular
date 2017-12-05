import { Component,Input } from '@angular/core';
import { Hero } from './hero';
import {HeroService} from './hero.service'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router } from '@angular/router';
@Component({
  selector: 'my-heroes',
  templateUrl:'heroes.component.html',
  styleUrls: ['./heroes.component.css'],
providers: []

})
export class HeroesComponent implements OnInit{
  [x: string]: any;
  ngOnInit(): void {
    this.getHeroes();
  }
  selectedHero: Hero;
  heroes:Hero[];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor(private router: Router,
    private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes=>this.heroes=heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}





