import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit{

  user:User = new User();

  constructor(private registerservice: RegisterService , private router: Router){}

  ngOnInit(): void {
  }

  userRegister(){
    console.log(this.user);
    this.registerservice.registerUser(this.user).subscribe(data=>{
      console.log(data);
      alert("Register Successfully")
      this.gotoListOfUserPage();
    },error=>alert("Invalid field")
    );
  }

  gotoListOfUserPage(){
    this.router.navigate(['/userlist']);
  }


}
