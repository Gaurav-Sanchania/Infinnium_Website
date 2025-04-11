/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogsService } from '../../services/blogsService.service';
import { NewsService } from '../../services/newsService.service';

@Component({
  selector: 'app-blog-list',
  imports: [CommonModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent implements OnInit {
  public blogs: any = [];
  public news: any = [];
  //@ViewChild(MatSort) sort!: MatSort;
  //@ViewChild(MatPaginator) paginator!: MatPaginator;
  hoveredRow: any = null;

  //dataSource1 = new MatTableDataSource([]);
  //dataSource2 = new MatTableDataSource([]);
  
  constructor(private blogService: BlogsService, private newsService: NewsService, private route: Router) { }

  async ngOnInit() {
    this.blogs = await this.blogService.getAllBlogs();
    // console.log(this.blogs);
    this.news = await this.newsService.getAllNews();

    //this.dataSource1 = new MatTableDataSource(this.blogs);
    //this.dataSource2 = new MatTableDataSource(this.news);
    //// console.log(this.dataSource);

    //this.dataSource1.sort = this.sort;
    //this.dataSource1.paginator = this.paginator;
    //this.dataSource2.sort = this.sort;
    //this.dataSource2.paginator = this.paginator;
  }

  displayedColumns: string[] = ['title', 'description', 'publishedDate', 'authorName', 'Action'];

  viewAction(id: number) {
    console.log(id);
  }
}
