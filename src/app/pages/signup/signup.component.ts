import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private formBuilder: FormBuilder){}

  formSignup = this.formBuilder.group({
    name: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  }, { validatỏrs: this.checkPassword })

  checkPassword(form: FormGroup){
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password === confirmPassword) return null
    return { notSame: true}
  }

  onSubmit() {
    console.log(this.formSignup.valid);
    
  }
}
