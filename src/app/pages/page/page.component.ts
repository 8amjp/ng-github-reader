import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../services/api.service';
import { app } from '../../app.setting';
import { RubyPipe } from '../../pipes/ruby.pipe';

@Component({
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  repo;
  content;
  episodes;
  prev;
  next;

  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta,
    private api: ApiService
  ) { }

  ngOnInit() {
    let _repo = this.route.snapshot.paramMap.get('repo');
    let _path = this.route.snapshot.paramMap.get('path');
    Observable.forkJoin(
      this.api.getRepo(_repo),
      this.api.getContents(_repo, app.episodedir + '/' + _path),
      this.api.getEpisodes(_repo)
    ).subscribe(
      ([repo, content, episodes]) => {
        this.repo    = repo;
        this.content = content;
        this.episodes   = episodes;
        this.setHeader();
        this.setPagination(_path);
      }
    );
  }

  setPagination(current): void {
console.log(this.episodes);
    this.episodes.forEach((episode, index) => {
      if (episode.name == current) {
        this.prev = this.episodes[index - 1] ? this.episodes[index - 1].name : null;
        this.next = this.episodes[index + 1] ? this.episodes[index + 1].name : null;
      }
    });
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
