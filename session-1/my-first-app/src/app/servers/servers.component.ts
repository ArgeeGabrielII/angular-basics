import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
    allowNewServer: boolean = false;
    serverCreationStatus: string = 'No server was created!';
    serverName: string = 'Test Server';
    serverCreated: boolean = false;

    constructor() {
        setTimeout(() => { this.allowNewServer = true; }, 2000);
    }

    ngOnInit() { }

    onCreateServer() {
        this.serverCreated = true;
        this.serverCreationStatus = `Server was created! Server Name: ${this.serverName}`;
    }

    onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}
