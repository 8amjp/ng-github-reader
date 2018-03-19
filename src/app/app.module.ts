import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RepoComponent } from './pages/repo/repo.component';
import { PageComponent } from './pages/page/page.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { ApiService } from './services/api.service';

import { FilterPipe } from './pipes/filter.pipe';
import { TitlePipe } from './pipes/title.pipe';
import { PropertiesPipe } from './pipes/properties.pipe';
import { RubyPipe } from './pipes/ruby.pipe';
import { InternallinkPipe } from './pipes/internallink.pipe';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    RepoComponent,
    PageComponent,
    NavbarComponent,
    FilterPipe,
    TitlePipe,
    PropertiesPipe,
    RubyPipe,
    InternallinkPipe,
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
