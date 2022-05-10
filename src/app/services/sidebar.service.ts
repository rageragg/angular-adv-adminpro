import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      subitem: [
        { title: 'Main', url: '/dashboard' },
        { title: 'Progress', url: 'progress' },
        { title: 'Charts', url: 'charts' },
        { title: 'Promises', url: 'promises' },
        { title: 'Rxjs', url: 'rxjs' }
      ]
    }
  ];

  constructor() { }
}
