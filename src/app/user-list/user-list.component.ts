import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users : User[] = [] 
  userId!: number
  constructor(private registerservice: RegisterService,
              private router: Router , private activeRouter: ActivatedRoute){}

  ngOnInit(): void {
    //this.userId =this.activeRouter.snapshot.params['userId'];
    console.log(this.userId);
    this.registerservice.getAllUser().subscribe(data=>{
      this.users = data;
    })
  }

  updateUser(userId:number){
    console.log(userId);
    this.router.navigate(['update-user', userId]);
  }

  deleteUser(userId:number){
    console.log(userId)
    this.registerservice.deleteUser(userId).subscribe((data:any)=>{
      alert("Deleted Successfully")
      window.location.reload(); 
    },error=>alert("Invalid field")
    );
    
  }

  getDeletedUser(){
    this.router.navigate(['deleted-user']);
  }

}
