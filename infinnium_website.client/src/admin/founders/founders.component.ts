/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../../services/authorService.service';

@Component({
  standalone: true,
  selector: 'app-founders',
  imports: [CommonModule],
  templateUrl: './founders.component.html',
  styleUrl: './founders.component.css',
})
export class FoundersComponent implements OnInit {
  showEditPopup = false;
  editMemberDetails: any = [];

  constructor(private authorService: AuthorService, private router: Router) {}

  public authors: any = [];

  async ngOnInit() {
    this.authors = await this.authorService.getAllAuthors();
  }

  slugify(str: string) {
    return str
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/--+/g, '-'); // Collapse multiple dashes
  }

  editMember(member: any) {
    this.showEditPopup = true;
    this.editMemberDetails = member;
  }

  closePopup() {
    this.showEditPopup = false;
  }

  navigateEditMember() {
    this.router.navigateByUrl(
      `/dashboard/update-members/${this.slugify(this.editMemberDetails.name)}/${
        this.editMemberDetails.guid
      }`
    );
  }
}
