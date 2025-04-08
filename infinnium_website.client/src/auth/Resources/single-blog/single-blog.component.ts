/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-single-blog',
  imports: [RouterLink, CommonModule],
  templateUrl: './single-blog.component.html',
  styleUrl: './single-blog.component.css'
})
export class SingleBlogComponent {
  @Input() blog: any = [];
  @Input() news: any = [];

  constructor(private route: ActivatedRoute) { }
}
