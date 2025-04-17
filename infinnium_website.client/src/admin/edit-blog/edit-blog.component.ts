/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogsService } from '../../services/blogsService.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../services/newsService.service';
import { QuillModule } from 'ngx-quill';


@Component({
  standalone: true,
  selector: 'app-edit-blog',
  imports: [CommonModule, NavbarComponent, FooterComponent, ReactiveFormsModule, QuillModule],
  providers: [],
  templateUrl: './edit-blog.component.html',
  styleUrl: './edit-blog.component.css'
})
export class EditBlogComponent implements OnInit {
  blogForm!: FormGroup;
  showPopup = false;
  blogId: any = "";
  previewUrl: string | ArrayBuffer | null = null;
  originalFile: File | null = null;
  category!: string;

  constructor(private fb: FormBuilder, private blogService: BlogsService, private newsService: NewsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.blogForm = this.fb.group({
      image: [null, Validators.required],
      title: ['', [Validators.required, Validators.maxLength(450)]],
      brief: ['', [Validators.required, Validators.maxLength(450)]],
      description: ['', Validators.required],
      publishedDate: ['', Validators.required],
      isActive: [true],
    });

    this.blogId = this.route.snapshot.paramMap.get('guid');
    const url = this.router.url;
    if (url.startsWith('/edit-blog')) {
      this.category = 'blog';
      this.blogService.getBlogDetails(this.blogId).then((blog) => {
        const formattedDate = blog.publishedDate.split(' ')[0];
        this.blogForm.patchValue({
          image: blog.image,
          title: blog.title,
          brief: blog.brief,
          description: blog.description,
          publishedDate: formattedDate,
          isActive: blog.isActive,
        });
        this.previewUrl = blog.image;
      });
    } else if (url.startsWith('/edit-news')) {
      this.category = 'news';
      this.newsService.getNewsDetails(this.blogId).then((blog) => {
        const formattedDate = blog.publishedDate.split(' ')[0];
        this.blogForm.patchValue({
          image: blog.image,
          title: blog.title,
          brief: blog.brief,
          description: blog.description,
          publishedDate: formattedDate,
          isActive: blog.isActive,
        });
        this.previewUrl = blog.image;
      });
    }
  }

  onFileChange(event: any) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.originalFile = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);

      this.blogForm.patchValue({
        image: file 
      });
      this.blogForm.get('image')?.markAsTouched();
    }
  }

  onSubmit(): void {
    const formValue = this.blogForm.value;

    const blog = {
      image: formValue.image,
      title: formValue.title,
      brief: formValue.brief,
      description: formValue.description,
      publishedDate: formValue.publishedDate,
      authorId: 1,
      isActive: formValue.isActive,
      id : this.blogId,
    };
    //console.log(blog);

    if (this.blogForm.valid) {
      //console.log(this.blogForm.value);
      if (this.category == 'blog') {
        this.blogService.editBlog(blog);
      } else {
        this.newsService.editNewsAndEvents(blog);
      }
      this.showPopup = true;
      this.blogForm.reset();
    } else {
      this.blogForm.markAllAsTouched();
    }
  }

  closePopup(): void {
    this.showPopup = false;
    this.router.navigateByUrl(`/Dashboard`);
  }
}
