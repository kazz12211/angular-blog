import { Component, OnInit } from '@angular/core';
import { User, AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {name: '', email: '', password: '', role: ''};

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.user.email = '';
    this.user.password = '';
  }

  login() {
    this.auth.loginUser(this.user).subscribe(resp => {
      this.auth.setLoggedIn(resp.token, resp.username);
      this.router.navigate(['/admin']);
    }, err => {
      console.log(err);
    });
  }
}
