/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
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
  constructor(private authorService: AuthorService) { }

  public authors: any = [];

  async ngOnInit() {
    this.authors = await this.authorService.getAllAuthors();
  }
}
