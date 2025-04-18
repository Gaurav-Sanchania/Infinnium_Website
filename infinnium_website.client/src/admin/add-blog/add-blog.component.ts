/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogsService } from '../../services/blogsService.service';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-add-blog',
  imports: [NavbarComponent, FooterComponent, CommonModule, ReactiveFormsModule, QuillModule],
  templateUrl: './add-blog.component.html',
  styleUrl: './add-blog.component.css'
})
export class AddBlogComponent implements OnInit {
  blogForm!: FormGroup;
  showPopup = false;

  constructor(private fb: FormBuilder, private blogService: BlogsService) {}

  ngOnInit(): void {
    this.blogForm = this.fb.group({
      image: [null, Validators.required],
      title: ['', [Validators.required]],
      brief: ['', [Validators.required]],
      description: ['', Validators.required],
      publishedDate: ['', Validators.required],
    });
  }

  onFileChange(event: any) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.blogForm.patchValue({ image: file });
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
      authorId: 1
    };

    if (this.blogForm.valid) {
      //console.log(this.blogForm.value);
      this.blogService.addBlog(blog);
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
