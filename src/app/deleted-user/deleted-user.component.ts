import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-deleted-user',
  templateUrl: './deleted-user.component.html',
  styleUrls: ['./deleted-user.component.css']
})
export class DeletedUserComponent implements OnInit{
  
  
  constructor( private registerService : RegisterService, private router : Router ){}
  users : User[] = []

  ngOnInit(): void {
    this.registerService.getDeletedUser().subscribe((data:any)=>{
      this.users=data;
  })
  }

  activateUser(userId : number){
    this.registerService.activateUser(userId).subscribe((data:any)=>{
      alert("Activated Successfully")
      window.location.reload(); 
    },error=>alert("Invalid field")
    );
  }

}
