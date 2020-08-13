
import { Component } from '@angular/core';
import { ApiService } from './core/api.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isloggedIn = true;

  constructor(
    private apiService: ApiService
    ){}
  isloggedInVerify(){
    this.isloggedIn = this.apiService.isLoggedIn();
  }
}