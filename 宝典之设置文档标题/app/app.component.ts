// Import the native Angular services.
import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
selector: 'my-app',
template:
  `<p>
    Select a title to set on the current HTML document:
  </p>

  <ul>
    <li><a (click)="setTitle( 'Good morning!' )">Good morning</a>.</li>
    <li><a (click)="setTitle( 'Good afternoon!' )">Good afternoon</a>.</li>
    <li><a (click)="setTitle( 'Good evening!' )">Good evening</a>.</li>
  </ul>
  `
})
export class AppComponent {
  public constructor(private titleService: Title ) { }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/