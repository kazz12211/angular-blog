import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  page: any = {};

  constructor(
    private userService: UserService,
    private auth: AuthService) { }

  ngOnInit() {
    this.userService.getUsers(0, 10).subscribe(resp => { this.page = resp; });
  }

}
