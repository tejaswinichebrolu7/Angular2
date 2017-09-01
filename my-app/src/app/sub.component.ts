import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';

@Component({
  selector: 'my-sub',
  templateUrl: './sub.component.html'
})
export class SubComponent{
  constructor(private route: ActivatedRoute, private router:Router) { }
  
  onClick():void{
	  this.router.navigate(['/dashboard']);
  }
  
  
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/