import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {Person} from './app.component';


@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent{
  persons:Person[] = [];
  show = false;
  person:Person;
  table= false;
  
  constructor(private router: Router) { }
  
  onClickAdd(name,id,salary):void{
  console.log("coming into add function");
  console.log("Name is: "+name);
  console.log("Id is: "+id);
  console.log("Salary is: "+salary);
  this.persons.push({id:id,name:name,salary:salary});
  this.table=true;
  }
  
  onDelete(id):void{
	  let allPersons = this.persons;
	  let length = allPersons.length;
	  for(let i=0;i<allPersons.length;i++){
		  if(allPersons[i].id == id){
			allPersons.splice(i,1);
			this.show = false;
				if(length == 1 ){
					this.table = false;
				}
		  } 
	  }
  }
  
  onView(person):void{
	  this.show =true;
	  this.person = person;
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/