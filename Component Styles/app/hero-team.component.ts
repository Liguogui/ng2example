import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-team',
  template: `
    <link rel="stylesheet" href="app/hero-team.component.css">
    <h3>Team</h3>
    <ul>
      <li *ngFor="let member of hero.team">
        {{member}}
      </li>
    </ul>`
})
export class HeroTeamComponent {
  @Input() hero: Hero;
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/