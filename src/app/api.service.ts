import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/rx';

@Injectable()
export class ApiService {

  private headers = new Headers({'Accept': 'application/vnd.github.v3.html'});

  constructor(private http: Http) {
  }

  getRepos(owner:string) {
    return this.http
      .get(`https://api.github.com/users/${owner}/repos?sort=pushed`)
      .map(response => response.json())
      .catch(this.handleError);
  }

  getReadMe(owner:string, repo:string) {
    return this.http
      .get(`https://api.github.com/repos/${owner}/${repo}/readme`, { headers: this.headers })
      .map(response => response.text())
      .catch(this.handleError);
  }

  getIndex(owner:string, repo:string) {
    return this.http
      .get(`https://api.github.com/repos/${owner}/${repo}/contents/episodes`)
      .map(response => response.json())
      .catch(this.handleError);
  }

  getContents(owner:string, repo:string, path:string) {
    return this.http
      .get(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, { headers: this.headers })
      .map(response => response.text())
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return Observable.throw(error.message || error);
  }

}