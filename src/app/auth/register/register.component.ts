import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { UsersService } from 'src/app/services/users.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	public formSubmited: boolean = false;

	public formRegister: FormGroup = this.fb.group({
		name: ['', Validators.required],
		email: ['', [Validators.required, Validators.email]],
		role: ['Guest', Validators.required],
		pwd1: ['', Validators.required],
		pwd2: ['', Validators.required],
		terms: [false, Validators.required]
	}, {
    validators: this.validatorEqualPwd('pwd1', 'pwd2')
  });

	constructor( private fb: FormBuilder,
               private userService: UsersService
             ) { }

	ngOnInit(): void {
	}

  // Funciones validadoras del formulario, cambian el estatus del formulario
  validatorEqualPwd( pwd1: string, pwd2: string ): object {

    return (formGroup: FormGroup) => {
      const passWord1 = formGroup.get(pwd1);
      const passWord2 = formGroup.get(pwd2);

      if(passWord1?.value === passWord2?.value) {
        passWord2?.setErrors(null);
      } else {
        passWord2?.setErrors({ noEqualPwd: true });
      }

    }

  }

  // Para realizar el registro de usuario una vez validado los datos
	registerUser() {

		this.formSubmited = true;

    if( this.formRegister.invalid ) {
      return;
    }

    // se realiza el registro de usuario
    this.userService.createUser( this.formRegister.value )
      .subscribe( {
        next: (resp) => {
          console.log('User Created!');
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

  // Valida si un campo del formulario es valido segun sus restricciones
	unValidField(field: string): boolean {

		if(!this.formRegister.get(field)?.valid && this.formSubmited) {
			return true;
		}

		return false;

	}

  // Valida si ha aceptado los terminos segun nuestras politicas
	unValidTerms(): boolean {

		if( ( !this.formRegister.get('terms')?.value || false ) && this.formSubmited) {
      return true;
		}

    return false;

	}

  // Valida si las clave editadas son iguales o fueron confirmadas
	unValidPasswords(): boolean {

		const pw1 = this.formRegister.get('pwd1')?.value;
		const pw2 = this.formRegister.get('pwd2')?.value;

		if( (pw1 !== pw2) && this.formSubmited ) {
			return true;
		}

		return false;

	}

  // Valida si el formulario es valido segun todas las restricciones de sus controles
  formsValid(): boolean {

    return this.formRegister.valid;

  }

}
