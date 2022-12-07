import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginuserService } from '../loginuser.service';
import { UserJobDetails } from '../user-job-details';

@Component({
  selector: 'app-add-user-job-details',
  templateUrl: './add-user-job-details.component.html',
  styleUrls: ['./add-user-job-details.component.css']
})
export class AddUserJobDetailsComponent implements OnInit{
 
  user:UserJobDetails=new UserJobDetails();
  userId!:number;
  constructor(private loginService: LoginuserService,
    private router: Router , private activeRouter: ActivatedRoute){}
  ngOnInit(): void {
    this.userId =this.activeRouter.snapshot.params['userId'];
  }

  addUserJobData(){
    console.log(this.userId);
    this.loginService.addUserJobDetails(this.user, this.userId).subscribe(data=>{
      alert("User Job Details Added Successfully")
      this.router.navigate(['userjobdetails', this.userId]);
    },error=>alert("Invalid field")
    );
  }

}
