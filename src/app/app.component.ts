import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';
  isAdminRoute: boolean = true;

  constructor(private router: Router) { }


  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = this.router.url;
        this.isAdminRoute = url.includes('/admin');
        // Check for other routes
        if (!this.isAdminRoute) {
          this.isAdminRoute = url.includes('/login') || url.includes('/signup');
        }
      }
    });
  }

}
