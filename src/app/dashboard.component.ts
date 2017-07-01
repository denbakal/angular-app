import {Component, OnInit} from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from "./hero.model";

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit{
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.gerHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
