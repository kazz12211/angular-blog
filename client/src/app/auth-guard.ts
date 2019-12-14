import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router) {}

    canActivate(): boolean {
        if (this.auth.loggedIn()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}