import { Component, OnInit } from '@angular/core';
import { UsersList } from './user-details.interface';
import { UserService } from '../service/user-details.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  title: string = 'Users'
  users?: UsersList[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsersData();
  }

  private getUsersData() {
    this.userService.getUsers().subscribe((res: any) => {
      this.users = res;
      console.log(res);
    });
  }
}
