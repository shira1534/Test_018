import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/User';
import { RegisterorloginComponent } from './registerorlogin/registerorlogin.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user!:User;
  constructor(public dialog: MatDialog,public ser:UserService) { }

  ngOninit(){
    this.user = JSON.parse(localStorage.getItem("user") || "");
    

    }
  title = 'project';
  logOut() {
    localStorage.removeItem("user");
    this.ser.userSignIn=false;
    this.ser.userName="אורח";

  }

  opendialog(): void {
    const dialogRef = this.dialog.open(RegisterorloginComponent, {
      width: '1250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onActivate(event: any) {
    window.scroll(0, 0)
  }


}
