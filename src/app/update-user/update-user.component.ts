import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginuserService } from '../loginuser.service';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{

  constructor(private activeRouter : ActivatedRoute, private registerService : RegisterService, private router : Router ){}
  userId!: number;
  user: User = new User();

  ngOnInit(): void {
    this.userId =this.activeRouter.snapshot.params['userId'];
    console.log(this.userId);
    this.registerService.getUserById(this.userId).subscribe((data:any)=>{
      this.user=data;

    })

    
  }

  updateUserData(){
    console.log(this.user);
    this.registerService.updateUser(this.user).subscribe(data=>{
      alert("Register Successfully")
      this.router.navigate(['/userlist']);
    },error=>alert("Invalid field")
    );
  }

}
