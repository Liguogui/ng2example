import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'inner-html-binding',
  templateUrl: 'inner-html-binding.component.html',
})
export class InnerHtmlBindingComponent {
  // For example, a user/attacker-controlled value from a URL.
  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/