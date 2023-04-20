import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SOA UI';
  public isUserLoggedIn: Observable<boolean> = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.isUserLoggedIn = this.authService.isUserLoggedIn; // returns true if user logged-in otherwise returns false
    console.log(this.isUserLoggedIn);
  }
}
