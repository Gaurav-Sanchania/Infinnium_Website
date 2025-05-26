/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { HeroSectionComponent } from '../../hero-section/hero-section.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { MemberComponent } from '../member/member.component';
import { AuthorService } from '../../../../services/authorService.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-member-layout',
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    FooterComponent,
    MemberComponent,
    NgIf,
    RouterLink
  ],
  providers: [AuthorService],
  templateUrl: './member-layout.component.html',
  styleUrl: './member-layout.component.css',
})
export class MemberLayoutComponent implements OnInit {
  public guid: string = '';
  constructor(
    private authorService: AuthorService,
    private route: ActivatedRoute
  ) {}

  public member: any = [];
  public loading = true;

  async ngOnInit() {
    this.loading = true;
    //console.log(memberName);
    const guidFromRoute = this.route.snapshot.paramMap.get('guid');
    //console.log(guidFromRoute);

    if (guidFromRoute) {
      this.guid = guidFromRoute;
      this.member = await this.authorService.getAuthorDetails(this.guid);
    } else {
      console.error('GUID not found in route!');
    }
    this.loading = false;
  }
}
