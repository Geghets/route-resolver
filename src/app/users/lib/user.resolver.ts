import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import {UserInterface} from "./user.interface";
import {UserService} from "../../services/user.service";
import {catchError, delay} from "rxjs/operators";
import {EMPTY} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<UserInterface> {
  constructor(private userService: UserService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot): Observable<UserInterface> {
    return this.userService.find(route.params?.['id']).pipe(
      delay(4000),
      catchError(() => {
        this.router.navigate([""]);
        return EMPTY;
      })
    )
  }
}
