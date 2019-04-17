import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserdetailsComponent } from './userdetails.component';
import { RouterModule } from "@angular/router";
import { RouteGuard } from '../route.guard';
import { UserDetailPipe } from './user-detail.pipe';

@NgModule({
  declarations: [
    UsersComponent,
    UserdetailsComponent,
    UserDetailPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UsersComponent,
        children: [ { path: 'embed/:uuid', component: UserdetailsComponent, canActivate: [RouteGuard] } ]
      },
      { path: ':uuid', component: UserdetailsComponent, canActivate: [RouteGuard] }
    ])
  ],
  exports: [
    UsersComponent,
    UserdetailsComponent
  ]
})
export class UsersModule { }
