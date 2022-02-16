import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  country = [
    { name: 'Afghanistan', code: 'AF' },
    { name: 'land Islands', code: 'AX' }
  ];
  genders = ['male', 'female'];
  registerForm: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.createFormGroup();
  }

  createFormGroup() {
    return (this.registerForm = this.formBuilder.group({
      fname: ["", Validators.required],
      lname: ["", Validators.required],
      password: ["", Validators.required],
      repassword: ["", Validators.required],
      email: ["", Validators.required],
      country: ["", Validators.required],
      gender: ["", Validators.required]
    }));
  }

  register() {
    console.log(this.registerForm.value)
  }
}
