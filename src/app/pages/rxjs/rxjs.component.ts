import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() {

    const obs$ = new Observable<number>( observer => {

      let i = 0;

      const interval = setInterval( () => {
        i++;
        observer.next(i);

        if( i === 5 ) {
          clearInterval(interval);
          observer.complete();
        }
      }
      , 1000 );

    });

    obs$.subscribe( {
        next: (value) => console.log (value),
        error: (error) => console.warn( error),
        complete: () => console.info('Fin')
      }
    );

  }

  ngOnInit(): void {
  }

}
