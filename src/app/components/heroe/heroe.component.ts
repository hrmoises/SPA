import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private _location: Location) {

    this.activatedRoute.params.subscribe( params => {
      // console.log(params);
      this.heroe = this._heroesService.getHeroe(params['id']);
    });

  }

  regresar() {
    this._location.back();
  }

}
