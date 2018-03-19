import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public owner:string = '8amjp';

  constructor() { }

  ngOnInit(): void {
  }
}
