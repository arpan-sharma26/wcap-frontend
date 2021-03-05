import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ComponentInteractionService } from '../component-interaction.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private service: ComponentInteractionService,
    private route: Router
  ) {}
  canActivate() {
    if (!this.service.loggedIn()) {
      return true;
    } else {
      this.route.navigate(['/login']);
      return false;
    }
    throw new Error('Method not implemented.');
  }
}
