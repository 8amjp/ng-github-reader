import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { ApiService } from '../../services/api.service';
import { app } from '../../app.setting';

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  repos$;
  page = {
    title:app.title,
    description:app.description
  };

  constructor(
    private title: Title,
    private meta: Meta,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getRepos().subscribe(
      response => {
        this.repos$ = response;
        this.setHeader();
      }
    );
    this.setHeader();
  }

  setHeader(): void {
    this.title.setTitle(app.title);
    this.meta.addTags([
      { name: 'description', content: app.description },
      { name: 'twitter:card', content: app.twitter.card },
      { name: 'twitter:site', content: app.twitter.site },
      { property: 'og:title', content: app.title },
      { property: 'og:description', content: app.description },
      { property: 'og:url', content: app.og.url },
      { property: 'og:type', content: app.og.type },
      { property: 'og:image', content: app.og.image },
    ]);
  }

}
