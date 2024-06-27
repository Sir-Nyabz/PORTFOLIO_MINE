import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private router: Router) {
  }
  title = 'PORTFOLIO_MINE';

  navig_resume() {
    this.router.navigate(['/resume']).
      then(() => {
        window.location.reload();
      });
  }

  navig_projects() {
    this.router.navigate(['/projects']).
      then(() => {
        window.location.reload();
      });
  }

  navig_contact() {
    this.router.navigate(['/contact']).
      then(() => {
        window.location.reload();
      });
  }
}
