import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  template: `
    {{ userDetail | json }}
  `,
  styles: []
})
export class UserdetailsComponent implements OnInit {
  private userDetail: any;
  constructor(private dataService: DataService, private route: ActivatedRoute) { 
    route.params.subscribe( params => this.userDetail = dataService.getCachedData()[parseInt(params['uuid'])] );
  }

  ngOnInit() {
  }

}
