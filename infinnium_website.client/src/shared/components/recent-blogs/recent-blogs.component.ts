import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-recent-blogs',
  imports: [RouterLink],
  templateUrl: './recent-blogs.component.html',
  styleUrl: './recent-blogs.component.css'
})
export class RecentBlogsComponent {
  
}
