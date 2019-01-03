import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private _hereosServices: HeroesService,
               private router: Router
               ) { }

  ngOnInit() {

    this.heroes = this._hereosServices.getHeroes();

  }

  verHeroe(idx: number) {
    // console.log(idx);
    this.router.navigate( ['/heroe', idx] );
  }

}
