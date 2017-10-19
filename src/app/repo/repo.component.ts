import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { ApiService } from '../api.service';
import { app } from '../app.setting';

@Component({
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  
  repo;
  content;
  episodes;

  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta,
    private api: ApiService
  ) { }

  ngOnInit() {
    let _repo = this.route.snapshot.paramMap.get('repo');
    Observable.forkJoin(
      this.api.getRepo(_repo),
      this.api.getReadMe(_repo),
      this.api.getEpisodes(_repo)
    ).subscribe(
      ([repo, content, episodes]) => {
        this.repo     = repo;
        this.content  = content;
        this.episodes = episodes;
        this.setHeader();
      }
    );
  }
  
  setHeader(): void {
    this.title.setTitle(`${this.repo.description} | ${app.title}`);
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
