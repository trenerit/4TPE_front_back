import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  constructor(private usersService: UsersService) {}
  
  ngOnInit(): void {
   this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe(data => {
      console.log('test');
      console.log(data);
    })
  }

}