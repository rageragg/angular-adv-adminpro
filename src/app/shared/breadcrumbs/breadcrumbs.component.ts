import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  public titlePage: string = 'Blank Page';
  private titleSubs$!: Subscription;

  constructor( private route: Router) {

    this.getDataRoute();

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

  getDataRoute(): void {

    this.titleSubs$ = this.route.events
      .pipe(
        filter( (event: any) => event instanceof ActivationEnd ),
        filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
        map( (event: ActivationEnd) => event.snapshot.data  )
      )
      .subscribe(
        {
          next: (data) => {
            this.titlePage = data['title'];
            document.title = `AdminPro - ${ data['title'] }`;
          },
          error: (error) => console.warn(error),
          complete: () => console.info('End')
        }
      );

  }

}
