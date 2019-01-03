import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  heroes: Heroe[] = [];
  busqueda: string;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private router: Router) {

    this.activatedRoute.params.subscribe( params => {
      this.busqueda = params['busqueda'];
      this.heroes = this._heroesService.buscarHeroes(params['busqueda']);
    });

  }

  ngOnInit() {

  }

  verHeroe(idx: number) {
    // console.log(idx);
    this.router.navigate( ['/heroe', idx] );
  }

}
