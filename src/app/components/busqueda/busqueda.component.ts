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
  longitud: number;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private router: Router) {
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      this.busqueda = params['busqueda'];
      if (this.busqueda !== '') {
        this.heroes = this._heroesService.buscarHeroes(params['busqueda']);
        this.longitud = this.heroes.length;
      } else {
        this.longitud = -1;
      }
    });

  }

  verHeroe(idx: number) {
    // console.log(idx);
    this.router.navigate( ['/heroe', idx] );
  }

}
