import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }       from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OwnerComponent }     from './owner/owner.component';
import { RepoComponent }      from './repo/repo.component';
import { PageComponent }      from './page/page.component';

import { ApiService } from './api.service';

import { FilterPipe }     from './filter.pipe';
import { TitlePipe }      from './title.pipe';
import { PropertiesPipe } from './properties.pipe';
import { RubyPipe } from './ruby.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OwnerComponent,
    RepoComponent,
    PageComponent,
    FilterPipe,
    TitlePipe,
    PropertiesPipe,
    RubyPipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
