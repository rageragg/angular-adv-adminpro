import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private _linkTheme = document.querySelector('#theme');
  private _theme: string = '';
  private _urlLS: string = '';

  constructor() {
    console.log('Init service Setting!');
    this._urlLS = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';
    this._linkTheme?.setAttribute('href', this._urlLS);
  }

  get urlLS(): string {
    return this._urlLS;
  }

  changeTheme( theme: string ): void {
    const url = `./assets/css/colors/${ theme }.css`;

    this._linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url );
    this._urlLS = url;
    this.checkCurrentTheme();
  }

  checkCurrentTheme():void {

      const links = document.querySelectorAll('.selector');
      links.forEach( element => {

        const themeElement = element.getAttribute('data-theme');
        const urlElement = `./assets/css/colors/${ themeElement }.css`;

        element.classList.remove('working');
        if( this._urlLS === urlElement ) {
          console.log('cambiando');
          element.classList.add('working');
        }

      });
  }

}
