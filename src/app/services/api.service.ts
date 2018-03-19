import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import { app } from '../app.setting';

@Injectable()
export class ApiService {

  private headers: HttpHeaders;

  constructor(
    private http: HttpClient
  ) {
    this.headers = new HttpHeaders({
      'Accept': 'application/vnd.github.v3.html'
    });
  }

  getRepos() {
    return this.http.get<any>(
      `https://api.github.com/orgs/${app.org}/repos?sort=updated`
    );
  }

  getRepo(repo:string) {
    return this.http.get<any>(
      `https://api.github.com/repos/${app.org}/${repo}`
    );
  }

  getReadMe(repo:string) {
    return this.http.get<any>(
      `https://api.github.com/repos/${app.org}/${repo}/readme`,
      { headers: this.headers, responseType: 'text' as 'json' }
    );
  }

  getEpisodes(repo:string) {
    return this.http.get<any>(
      `https://api.github.com/repos/${app.org}/${repo}/contents/${app.episodedir}`
    );
  }

  getContents(repo:string, path:string) {
    return this.http.get<any>(
      `https://api.github.com/repos/${app.org}/${repo}/contents/${path}`,
      { headers: this.headers, responseType: 'text' as 'json' }
    );
  }

}
