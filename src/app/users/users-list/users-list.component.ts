import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  public users: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.subs.push(this.userService.list().subscribe((users: any) => {
      if (users) {
        this.users = users;
      }
    }))
  }

  ngOnDestroy():void {
    if (this.subs) { this.subs.forEach(sub => sub.unsubscribe()); }
  }

}
