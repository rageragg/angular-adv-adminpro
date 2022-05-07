import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public menu: any[];

  constructor( private serviceSidebar: SidebarService ) {
    this.menu = this.serviceSidebar.menu;
  }

  ngOnInit(): void {
  }

}
