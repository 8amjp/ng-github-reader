import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { OwnerComponent }     from './owner/owner.component';
import { RepoComponent }      from './repo/repo.component';
import { PageComponent }      from './page/page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: ':owner',
    component: OwnerComponent
  },
  {
    path: ':owner/:repo',
    component: RepoComponent
  },
  {
    path: ':owner/:repo/episodes/:path',
    component: PageComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
