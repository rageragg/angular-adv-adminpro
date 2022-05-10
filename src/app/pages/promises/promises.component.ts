import { PrefixNot } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {

  users: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getUsers()
      .then( userList => this.users = userList );
  }

  getUsers(): Promise<any> {
    const url = 'https://reqres.in/api/users';

    return new Promise( resolve => {
      fetch(url)
        .then( resp => resp.json() )
        .then( body => resolve( body.data ));
    });

  }

}
