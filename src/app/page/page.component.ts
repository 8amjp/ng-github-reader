import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { ApiService } from '../api.service';
import { RubyPipe } from '../ruby.pipe';

@Component({
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  content: string;
  index;
  owner: string;
  repo: string;
  path: string;

  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.owner = this.route.snapshot.paramMap.get('owner');
    this.repo = this.route.snapshot.paramMap.get('repo');
    this.path = this.route.snapshot.paramMap.get('path');
    Observable.forkJoin(
      this.api.getContents(this.owner, this.repo, 'episodes/' + this.path),
      this.api.getIndex(this.owner, this.repo)
    ).subscribe(
      ([content, index]) => {
        this.content = content;
        this.index = index;
        this.setHeader();
      }
    );
    this.setHeader();
  }
  
  setHeader(): void {
    this.title.setTitle('Novels at 8am.');
    this.meta.addTags([
      { name: 'description', content: '足羽川永都(8amjp)が執筆した小説を公開しています。'},
      { name: 'twitter:card', content: 'summary'},
      { name: 'twitter:site', content: '@8amjp'},
      { property: 'og:title', content: 'Novels at 8am.'},
      { property: 'og:description', content: '足羽川永都(8amjp)が執筆した小説を公開しています。'},
      { property: 'og:url', content: 'https://8amjp.github.io/'},
      { property: 'og:type', content: 'novel'},
      { property: 'og:image', content: 'site-icon.png'},
    ]);
  }

}
