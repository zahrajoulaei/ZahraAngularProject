import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  allowNewServe = false;
  Serverid: number = 120;
  getServerid :string = 'sahih';
  constructor() {
    setTimeout(() => {this.allowNewServe = true; }, 2000);
  }

  ngOnInit() {
  }

}
