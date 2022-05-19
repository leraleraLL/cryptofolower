import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(
    public authService: AuthService,
    private router: Router
    ) {}
  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate([''])
    })     
  }
}
