import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  sub: Subscription = new Subscription();
  myUser: User = new User();
  constructor(private ser: UserService, private router: Router,  public dialogRef: MatDialogRef<LoginComponent>) { }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  logIn() {
    this.ser.logIn(this.myUser).subscribe(succ => {

      console.log(succ+ "i log");
      localStorage.setItem("user", JSON.stringify(succ));
      this.ser.userSignIn=true;
      this.ser.userName=succ.userName;
      this.dialogRef.close();
    }, err => {
      // alert(err.error)
      console.log(err.error);
      this.router.navigate(["/registr"])

    })
  }
  ngOnInit(): void {
  }

}
