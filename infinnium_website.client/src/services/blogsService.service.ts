/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: "root",
})

export class BlogsService {
    constructor(private httpClient: HttpClient) {}

  async getAllBlogs(): Promise<{ id: number; title: string; description: string; brief: string; publishedDate: string; image: string;
      imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string; guid: string; }[]> {
        // https://localhost:7046/BlogsController/GetAllBlogs
        try {
            const response = await firstValueFrom(
              this.httpClient.get<{ id: number; title: string; description: string; brief: string; publishedDate: string; image: string;
                  imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string; guid: string; }[]>
                    (`https://localhost:7046/BlogsController/GetAllBlogs`));
          const updatedResponse = response.map(item => {
            if (item.image) {
              item.image = `data:image/jpeg;base64,${item.image}`;
            }
            return item;
          });
          return updatedResponse;
        } catch (error) {
            // console.log(error);
            return [];
        }
    }

  async getBlogDetails(guid: string): Promise<{ id: number; title: string; description: string; brief: string; publishedDate: string; image: string;
    imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string; guid: string; }> {
        // https://localhost:7046/BlogsController/GetBlogDetails/{id}
        try {
            const response = await firstValueFrom(
                this.httpClient.get<{ id: number; title: string; description: string; brief: string; publishedDate: string; image: string,
                  imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string; guid: string; }>
                    (`https://localhost:7046/BlogsController/GetBlogDetails/${guid}`));
          if (response.image) {
            response.image = `data:image/jpeg;base64,${response.image}`;
          }
          return response;
        } catch (error) {
            // console.log(error);
          throw error;
        }
    }

  async getTop3Blogs(): Promise<{ id: number; title: string; description: string; brief: string; publishedDate: string; image: string;
    imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string; guid: string; }[]> {
        // https://localhost:7046/BlogsController/Top3Blogs
        try {
            const response = await firstValueFrom(
              this.httpClient.get<{ id: number; title: string; description: string; brief: string; publishedDate: string; image: string;
                  imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string; guid: string; }[]>("https://localhost:7046/BlogsController/Top3Blogs"));
          const updatedResponse = response.map(item => {
            if (item.image) {
              item.image = `data:image/jpeg;base64,${item.image}`;
            }
            return item;
          });
          return updatedResponse;
        } catch (error) {
            // console.log(error);
            return [];            
        }
    }

    // All post methods are yet to be tested

    addBlog(blog: any) {
      try {
        const formData = new FormData();

        formData.append('Image', blog.image);
        formData.append('Title', blog.title);
        formData.append('Description', blog.description);
        formData.append('Brief', blog.brief);
        formData.append('PublishedDate', blog.publishedDate);
        formData.append('AuthorId', blog.authorId);
        formData.append('ImageName', blog.image.name);

        this.httpClient.post("https://localhost:7046/BlogsController/AddBlog", formData).subscribe();
            return 'Successful';
        } catch (error) {
            // console.log(error);
            return error;
        }
    }

    editBlog(blog: any) {
        try {
            this.httpClient.post("https://localhost:7046/BlogsController/EditBlog", blog).subscribe();
            return 'Successful';
        } catch (error) {
            // console.log(error);
            return error;
        }
    }

    deleteBlog(id: number) {
        try {
            this.httpClient.post(`https://localhost:7046/BlogsController/DeleteBlog/${id}`, id).subscribe();
            return 'Successful';
        } catch (error) {
            // console.log(error);
            return error;
        }
    }
}
