import { Component } from '@angular/core';
import { AuthguardGuard } from 'src/app/guard/authguard.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authGuard: AuthguardGuard) { }
  logout(): void {
    this.authGuard.logout();
  }

}
