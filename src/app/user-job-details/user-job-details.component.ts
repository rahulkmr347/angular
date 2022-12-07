import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginuserService } from '../loginuser.service';
import { UserJobDetails } from '../user-job-details';

@Component({
  selector: 'app-user-job-details',
  templateUrl: './user-job-details.component.html',
  styleUrls: ['./user-job-details.component.css']
})
export class UserJobDetailsComponent implements OnInit{
  
  
  users : UserJobDetails[] = [] 
  userId!: number
  constructor(private loginService: LoginuserService,
              private router: Router , private activeRouter: ActivatedRoute){}

  ngOnInit(): void {
    this.userId =this.activeRouter.snapshot.params['userId'];
    console.log(this.userId);
    this.loginService.getAllUserJobDetails(this.userId).subscribe(data=>{
      this.users = data;
    })
  }

  deleteRecord(userDetailsId:number){
    console.log(userDetailsId)
    this.loginService.deleteRecord(userDetailsId).subscribe((data:any)=>{
      alert("Deleted Successfully")
      window.location.reload(); 
    },error=>alert("Invalid field")
    );
    
  }

  addRecord(userId:number){
    console.log(userId);
    this.router.navigate(['add-user-job-details', userId]);
  }

}
