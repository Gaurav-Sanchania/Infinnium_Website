/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthorService } from '../../../services/authorService.service';

@Component({
  standalone: true,
  selector: 'app-team',
  imports: [RouterLink, CommonModule],
  providers: [AuthorService],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent implements OnInit {
  constructor(private authorService: AuthorService, private router: Router) { }

  public authors: any = [];

  async ngOnInit() {
    this.authors = await this.authorService.getAllAuthors();
  }

  goToMember(author: any) {
    this.router.navigate(['Member', author.name, author.guid]);
  }
}
