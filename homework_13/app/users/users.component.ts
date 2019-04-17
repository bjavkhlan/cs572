import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  template: `
  <ol start="0">
    <router-outlet></router-outlet> <br>
    <li *ngFor="let user of users; index as i">
      {{user.name | json}}
      <a [routerLink]="['embed', i]">{{i}}</a>
    </li>
  </ol>
  `,
  styles: []
})
export class UsersComponent implements OnInit {
  private users: any;
  constructor(private dataService: DataService) { 
    this.users = dataService.getCachedData();
  }

  ngOnInit() {
  }

}
