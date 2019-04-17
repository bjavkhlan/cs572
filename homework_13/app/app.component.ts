import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
    selector: 'app-root',
    template: `
        <a [routerLink]="['users']">Go to users</a><br>
        <router-outlet></router-outlet>
    `,
    styles: []
})
export class AppComponent {
    constructor(private dataService: DataService) {
        this.dataService.getOnlineData();
    }
}
