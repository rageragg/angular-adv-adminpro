import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap  } from 'rxjs/operators';

import { IRegisterUserForm } from '../interfaces/iregister-user-form.interface';
import { ILoginUserForm } from '../interfaces/ilogin-user-form.interface';

import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient ) { }

  createUser(formData: IRegisterUserForm ) {

    return this.http.post( `${ base_url }/users`,
      {
          name: formData.name,
          password: formData.pwd1,
          email: formData.email
      }
    );

  }

  loginUser(formData: ILoginUserForm ) {

    return this.http.post( `${ base_url }/login`, formData )
      .pipe(
        tap( (resp: any) => {
          localStorage.setItem('token', resp.token )
        } )
      );

  }

}
