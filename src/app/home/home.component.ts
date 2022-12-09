import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.userservice.getPublicContent().subscribe({
      next: Date => {
        this.content=Date;
      },
      error: err => {
        this.content=JSON.parse(err.error).message;
      }
    });
  }
}
