/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthorService } from '../../services/authorService.service';

@Component({
  standalone: true,
  selector: 'app-founders',
  imports: [CommonModule, RouterLink],
  templateUrl: './founders.component.html',
  styleUrl: './founders.component.css'
})
export class FoundersComponent implements OnInit {
  constructor(private authorService: AuthorService, private router: Router) { }

  public authors: any = [];

  async ngOnInit() {
    this.authors = await this.authorService.getAllAuthors();
  }

  // goToMember(author: any) {
  //   this.router.navigate(['Member', author.name, author.guid]);
  // }
}
