import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-signin-rout',
  templateUrl: './signin-rout.component.html',
  styleUrls: ['./signin-rout.component.scss']
})
export class SigninRoutComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  hide = true;

  constructor() { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

}
