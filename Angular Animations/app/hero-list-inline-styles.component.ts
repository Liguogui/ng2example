import {
  Component,
  Input,
  trigger,
  style,
  transition,
  animate
} from '@angular/core';

import { Heroes } from './hero.service';

@Component({
 moduleId: module.id,
 selector: 'hero-list-inline-styles',
 template: `
   <ul>
     <li *ngFor="let hero of heroes"
         [@heroState]="hero.state"
         (click)="hero.toggleState()">
       {{hero.name}}
     </li>
   </ul>
 `,
 styleUrls: ['hero-list.component.css'],
 /**
  * Define two states, "inactive" and "active", and the end
  * styles that apply whenever the element is in those states.
  * Then define an animation for the inactive => active transition.
  * This animation has no end styles, but only styles that are
  * defined inline inside the transition and thus are only kept
  * as long as the animation is running.
  */
 animations: [
   trigger('heroState', [
     transition('inactive => active', [
       style({
         backgroundColor: '#cfd8dc',
         transform: 'scale(1.3)'
       }),
       animate('80ms ease-in', style({
         backgroundColor: '#eee',
         transform: 'scale(1)'
       }))
     ]),
   ])
 ]
})
export class HeroListInlineStylesComponent {
 @Input() heroes: Heroes;
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/