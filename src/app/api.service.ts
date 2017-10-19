import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/rx';
import { app } from './app.setting';

@Injectable()
export class ApiService {

  private headers = new Headers({'Accept': 'application/vnd.github.v3.html'});

  constructor(private http: Http) {
  }

  getRepos() {
    return this.http
      .get(`https://api.github.com/orgs/${app.org}/repos?sort=pushed`)
      .map(response => response.json())
      .catch(this.handleError);
  }

  getRepo(repo:string) {
    return this.http
      .get(`https://api.github.com/repos/${app.org}/${repo}`)
      .map(response => response.json())
      .catch(this.handleError);
  }

  getReadMe(repo:string) {
    return this.http
      .get(`https://api.github.com/repos/${app.org}/${repo}/readme`, { headers: this.headers })
      .map(response => response.text())
      .catch(this.handleError);
  }

  getEpisodes(repo:string) {
    return this.http
      .get(`https://api.github.com/repos/${app.org}/${repo}/contents/${app.episodedir}`)
      .map(response => response.json())
      .catch(this.handleError);
  }

  getContents(repo:string, path:string) {
    return this.http
      .get(`https://api.github.com/repos/${app.org}/${repo}/contents/${path}`, { headers: this.headers })
      .map(response => response.text())
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return Observable.throw(error.message || error);
  }

}