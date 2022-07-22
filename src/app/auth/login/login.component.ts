import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', Validators.required]
	});

  constructor(private router: Router,
              private fb: FormBuilder,
              private userService: UsersService
             ) { }

  ngOnInit(): void {
  }

  login(): void {

    if( this.formLogin.invalid ) {
      return;
    }

    // se realiza el login de usuario
    this.userService.loginUser( this.formLogin.value )
      .subscribe( {
        next: (resp) => {
          console.log('User Login!');
          console.log( resp );
        },
        error: (resp) => {
          // Si sucede un error
          Swal.fire({
            title: 'Error!',
            text: resp.error.msg,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        },
        complete: () => console.info('complete')
      } );
  }

  // Valida si el formulario es valido segun todas las restricciones de sus controles
  formsValid(): boolean {

    return this.formLogin.valid;

  }

}
