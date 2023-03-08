import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { ErrorComponent } from 'src/app/error/error.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,ErrorComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!:FormGroup
  error=null
  constructor(private fb:FormBuilder, private authentication:AuthenticationService, private auth :AuthService,
    private router:Router,
    @Inject(PLATFORM_ID) private platformId:object
    ){

  }
  ngOnInit(): void {
    this.form = this.fb.group({
      Email:[null, [Validators.required, Validators.email]],
      Password:[null, Validators.required]
    })
  }

  submitForm(){
    this.authentication.loginUser(this.form.value).subscribe(response=>{
      this.auth.setRole(response.role)
      this.auth.setName(response.name)
      this.auth.login()
      if(isPlatformBrowser(this.platformId)){
        localStorage.setItem('token', response.token)
       }
      if(response.token){
        this.router.navigate(['book'])
      }
    },(error)=>{
    this.error=error.error
    })
  }

  Close(){
    this.error=null
  }
}
