import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usereditor',
  templateUrl: './usereditor.component.html',
  styleUrls: ['./usereditor.component.css']
})
export class UsereditorComponent implements OnInit {

  user: any = {name: '', email: '', password: '', role: ''};
  roles = [{name: 'admin', label: '管理者'}, {name: 'user', label: '一般ユーザー'}];

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(p => {
      if (p.id) {
        const userId = p.id;
        this.userService.getUser(userId).subscribe(resp => {
          this.user = resp;
          this.user.password = '';
        });
      }
    });
  }

  save() {
    if (this.user._id) {
      this.updateUser();
    } else {
      this.registerUser();
    }
  }

  registerUser() {
    this.userService.register(this.user).subscribe(resp => {
      this.router.navigate(['/users']);
    }, err => {
      console.log(err);
    });
  }

  updateUser() {
    this.userService.update(this.user).subscribe(resp => {
      this.router.navigate(['/users']);
    }, err => {
      console.log(err);
    });
  }

  deleteUser() {
    this.userService.delete(this.user).subscribe(resp => {
      this.router.navigate(['/users']);
    }, err => {
      console.log(err);
    });
  }

}
