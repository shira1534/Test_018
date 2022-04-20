import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/User';
import { UserService } from '../user.service';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  checkPassword:number=0;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  hide = true;

newuser:User=new User();
sub: Subscription = new Subscription();
  constructor(private ser: UserService, private router: Router, public dialogRef: MatDialogRef<RegisterComponent>) { }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {
  }
  register(){debugger
    this.ser.Register(this.newuser).subscribe(succ => {
      console.log(succ +"new user");
      if(succ==null){
        Swal.fire({  
          position: 'center',  
          icon: 'error',  
          title: 'קיים משתמש עם מייל זה',  
          showConfirmButton: true,  
           
        })         }
      else
      localStorage.setItem("user", JSON.stringify(succ));
      this.ser.userSignIn=true;
      this.ser.userName=succ.userName;


      this.dialogRef.close();

    }, err => {
      console.log(err);
      this.router.navigate(["/registr"])

    })






  
}
}
