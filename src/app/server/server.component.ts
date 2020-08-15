import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  allowNewServe = false;
  serverCreatinStatus = "No server is created!";
  Serverid: number = 120;
  getServerid :string = 'Running perfect';
  serverName ='';
  userName='';
  userNameStatus ="username is not created";
  constructor() {
    setTimeout(() => {this.allowNewServe = true; }, 2000);
  }

  ngOnInit() {
  }
  OnserverCreatin() {
    this.serverCreatinStatus = "Server just created! its name is :" + this.serverName;
  }
  onusernameClick() {
     this.userNameStatus = "username is: " + this.userName;
  }
  OnUpdateServerName(event) {
    this.serverName = (<HTMLInputElement>event.target).value;

  }
}
