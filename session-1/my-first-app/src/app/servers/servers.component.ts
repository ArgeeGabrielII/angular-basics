import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
    // Properties
    serverID: string = '001'
    isDisabled: boolean = false;

    isCreated: boolean = false;
    server_list: any = ["list 1", "list 2", "list 3"];
    my_shopping_list: string = "veg";

    serverName: string = 'Test Server';
    allowNewServer: boolean = false;
    serverCreationStatus: string = 'No server was created!';
    serverCreated: boolean = false;

    constructor() {
        setTimeout(() => { this.allowNewServer = true; }, 2000);
    }

    // Methods
    ngOnInit() { }

    onClick() {
        this.serverID = '002';
        this.isCreated = true;
    }

    onCreateServer() {
        this.serverCreated = true;
        this.serverCreationStatus = `Server was created! Server Name: ${this.serverName}`;
    }

    onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}
