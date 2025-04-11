import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { BlogListComponent } from "../blog-list/blog-list.component";

@Component({
  standalone: true,
  selector: 'app-admin-dashboard',
  imports: [NavbarComponent, BlogListComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  
}
