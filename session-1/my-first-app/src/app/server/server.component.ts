import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    // Properties
    serverId: number = 10;
    serverStatus: string = 'offline';
    server_list: any = ["Server 1", "Server 2", "Server 3"];

    // Methods
    getServerStatus() {
        return this.serverStatus;
    }
}