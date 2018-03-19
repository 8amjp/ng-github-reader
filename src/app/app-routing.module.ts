import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RepoComponent }      from './pages/repo/repo.component';
import { PageComponent }      from './pages/page/page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: ':repo',
    component: RepoComponent
  },
  {
    path: ':repo/episodes/:path',
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
