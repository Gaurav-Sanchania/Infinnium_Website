/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from 'rxjs';
import { environment } from "../environments/environment";
import { AuthSessionService } from "../guards/authSession";

@Injectable({
    providedIn: "root",
})

export class BlogsService {
    private readonly BASE_URL = environment.base_api_Url;

    constructor(private httpClient: HttpClient, private auth: AuthSessionService) {}

  async getAllBlogs(): Promise<{ id: number; title: string; description: string; brief: string; publishedDate: string; image: string;
      imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string; guid: string; }[]> {
        // https://localhost:7046/BlogsController/GetAllBlogs
        try {
            const response = await firstValueFrom(
              this.httpClient.get<{ id: number; title: string; description: string; brief: string; publishedDate: string; image: string;
                  imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string; guid: string; }[]>
                    (`${this.BASE_URL}/BlogsController/GetAllBlogs`));
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

  async getBlogDetails(guid: string): Promise<{ id: number; title: string; description: string; brief: string; publishedDate: string; image: string; imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string; guid: string; isActive: boolean }> {
        // https://localhost:7046/BlogsController/GetBlogDetails/{id}
        try {
            const response = await firstValueFrom(
                this.httpClient.get<{ id: number; title: string; description: string; brief: string; publishedDate: string; image: string,
                  imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string; guid: string; isActive: boolean }>
                    (`${this.BASE_URL}/BlogsController/GetBlogDetails/${guid}`));
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
                  imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string; guid: string; }[]>
                  (`${this.BASE_URL}/BlogsController/Top3Blogs`));
          const updatedResponse = response.map(item => {
            if (item.image) {
              item.image = `data:image/jpeg;base64,${item.image}`;
            }
            return item;
          });
          //console.log(updatedResponse);
          return updatedResponse;
        } catch (error) {
            // console.log(error);
            return [];            
        }
  }

  async getAllBlogsAdmin(): Promise<{
    id: number; title: string; description: string; brief: string; publishedDate: string; image: string;
    imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string; guid: string; isActive: boolean;
  }[]> {
    // https://localhost:7046/BlogsController/GetAllBlogs
    try {
      const token = sessionStorage.getItem('auth-token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      const response = await firstValueFrom(
        this.httpClient.get<{
          id: number; title: string; description: string; brief: string; publishedDate: string; image: string;
          imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string; guid: string; isActive: boolean;
        }[]>
          (`${this.BASE_URL}/BlogsController/GetAllBlogsAdmin`, {headers}));
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

  //------------------------------------------------------------------------------------------------------------------------------------------

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

        this.httpClient.post(`${this.BASE_URL}/BlogsController/AddBlog`, formData).subscribe();
            return 'Successful';
        } catch (error) {
            // console.log(error);
            return error;
        }
    }

  editBlog(blog: any) {
    try {
      const formData = new FormData();

      formData.append('Image', blog.image);
      formData.append('Title', blog.title);
      formData.append('Description', blog.description);
      formData.append('Brief', blog.brief);
      formData.append('PublishedDate', blog.publishedDate);
      formData.append('AuthorId', blog.authorId);
      formData.append('ImageName', blog.image.name);
      formData.append('isActive', blog.isActive);
      formData.append('Id', blog.id);

      //console.log(formData);

      this.httpClient.post(`${this.BASE_URL}/BlogsController/EditBlog`, formData).subscribe();
      return 'Successful';
    } catch (error) {
      // console.log(error);
      return error;
    }
  }

    deleteBlog(id: number) {
        try {
            this.httpClient.post(`${this.BASE_URL}/BlogsController/DeleteBlog/${id}`, id).subscribe();
            return 'Successful';
        } catch (error) {
            // console.log(error);
            return error;
        }
    }

  updateStatus(data: any) {
    try {
      this.httpClient.post(`${this.BASE_URL}/BlogsController/SetisActive`, data).subscribe();
      return 'Successful';
    } catch (error) {
      return error;
    }
  }
}
