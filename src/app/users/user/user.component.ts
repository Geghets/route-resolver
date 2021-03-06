import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public user: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = this.route.snapshot.data['user'];
  }

}
