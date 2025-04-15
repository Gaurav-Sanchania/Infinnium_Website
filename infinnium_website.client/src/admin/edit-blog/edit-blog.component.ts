/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogsService } from '../../services/blogsService.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-edit-blog',
  imports: [CommonModule, NavbarComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './edit-blog.component.html',
  styleUrl: './edit-blog.component.css'
})
export class EditBlogComponent implements OnInit {
  blogForm!: FormGroup;
  showPopup = false;

  constructor(private fb: FormBuilder, private blogService: BlogsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.blogForm = this.fb.group({
      image: [null, Validators.required],
      title: ['', [Validators.required, Validators.maxLength(100)]],
      brief: ['', [Validators.required, Validators.maxLength(150)]],
      description: ['', Validators.required],
      publishedDate: ['', Validators.required],
      isActive: [true],
    });

    const blogId = this.route.snapshot.paramMap.get('guid');
  if (blogId) {
    this.blogService.getBlogDetails(blogId).then((blog) => {
      const formattedDate = blog.publishedDate.split(' ')[0];
      this.blogForm.patchValue({
        image: blog.image,
        title: blog.title,
        brief: blog.brief,
        description: blog.description,
        publishedDate: formattedDate,
        isActive: blog.isActive,
      });
    });
  }
  }

  onFileChange(event: any) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.blogForm.patchValue({
          image: reader.result // This will be a data URL
        });
      };
      reader.readAsDataURL(file);
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
    };

    if (this.blogForm.valid) {
      //console.log(this.blogForm.value);
      this.blogService.editBlog(blog);
      this.showPopup = true;
      this.blogForm.reset();
    } else {
      this.blogForm.markAllAsTouched();
    }
  }

  closePopup(): void {
    this.showPopup = false;
  }
}
