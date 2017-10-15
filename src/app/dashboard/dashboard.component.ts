import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ApiService } from '../api.service';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta,
    private api: ApiService
  ) { }

  ngOnInit() {
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
