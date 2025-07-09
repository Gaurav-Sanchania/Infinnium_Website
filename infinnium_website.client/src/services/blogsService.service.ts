/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AuthSessionService } from '../guards/authSession';
import { ConfigService } from './configService.service';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  private BASE_URL;

  constructor(
    private httpClient: HttpClient,
    private auth: AuthSessionService,
    private config: ConfigService
  ) {
    this.BASE_URL = this.config.enApiUrl;
  }

  async getAllBlogs(): Promise<
    {
      id: number;
      title: string;
      description: string;
      brief: string;
      publishedDate: string;
      image: string;
      imageName: string;
      authorId: number;
      authorName: string;
      authorEmail: string;
      authorDepartment: string;
      guid: string;
    }[]
  > {
    // https://localhost:7046/Blogs/GetAllBlogs
    try {
      const response = await firstValueFrom(
        this.httpClient.get<
          {
            id: number;
            title: string;
            description: string;
            brief: string;
            publishedDate: string;
            image: string;
            imageName: string;
            authorId: number;
            authorName: string;
            authorEmail: string;
            authorDepartment: string;
            guid: string;
          }[]
        >(`${this.BASE_URL}/Blogs/GetAllBlogs`)
      );
      const updatedResponse = response.map((item) => {
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

  async getBlogDetails(
    guid: string
  ): Promise<{
    id: number;
    title: string;
    description: string;
    brief: string;
    publishedDate: string;
    image: string;
    imageName: string;
    authorId: number;
    authorName: string;
    authorEmail: string;
    authorDepartment: string;
    guid: string;
    isActive: boolean;
  }> {
    // https://localhost:7046/Blogs/GetBlogDetails/{id}
    try {
      const response = await firstValueFrom(
        this.httpClient.get<{
          id: number;
          title: string;
          description: string;
          brief: string;
          publishedDate: string;
          image: string;
          imageName: string;
          authorId: number;
          authorName: string;
          authorEmail: string;
          authorDepartment: string;
          guid: string;
          isActive: boolean;
        }>(`${this.BASE_URL}/Blogs/GetBlogDetails/${guid}`)
      );
      if (response.image) {
        response.image = `data:image/jpeg;base64,${response.image}`;
      }
      return response;
    } catch (error) {
      // console.log(error);
      throw error;
    }
  }

  async getTop3Blogs(): Promise<
    {
      id: number;
      title: string;
      description: string;
      brief: string;
      publishedDate: string;
      image: string;
      imageName: string;
      authorId: number;
      authorName: string;
      authorEmail: string;
      authorDepartment: string;
      guid: string;
    }[]
  > {
    // https://localhost:7046/Blogs/Top3Blogs
    try {
      const response = await firstValueFrom(
        this.httpClient.get<
          {
            id: number;
            title: string;
            description: string;
            brief: string;
            publishedDate: string;
            image: string;
            imageName: string;
            authorId: number;
            authorName: string;
            authorEmail: string;
            authorDepartment: string;
            guid: string;
          }[]
        >(`${this.BASE_URL}/Blogs/Top3Blogs`)
      );
      const updatedResponse = response.map((item) => {
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

  async getAllBlogsAdmin(): Promise<
    {
      id: number;
      title: string;
      description: string;
      brief: string;
      publishedDate: string;
      image: string;
      imageName: string;
      authorId: number;
      authorName: string;
      authorEmail: string;
      authorDepartment: string;
      guid: string;
      isActive: boolean;
    }[]
  > {
    // https://localhost:7046/Blogs/GetAllBlogs
    try {
      const token = this.auth.getToken();
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      const response = await firstValueFrom(
        this.httpClient.get<
          {
            id: number;
            title: string;
            description: string;
            brief: string;
            publishedDate: string;
            image: string;
            imageName: string;
            authorId: number;
            authorName: string;
            authorEmail: string;
            authorDepartment: string;
            guid: string;
            isActive: boolean;
          }[]
        >(`${this.BASE_URL}/Blogs/GetAllBlogsAdmin`, { headers })
      );
      const updatedResponse = response.map((item) => {
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

      const token = this.auth.getToken();
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      this.httpClient
        .post(`${this.BASE_URL}/Blogs/AddBlog`, formData, { headers })
        .subscribe();
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

      const token = this.auth.getToken();
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      this.httpClient
        .post(`${this.BASE_URL}/Blogs/EditBlog`, formData, {
          headers,
        })
        .subscribe();
      return 'Successful';
    } catch (error) {
      // console.log(error);
      return error;
    }
  }

  deleteBlog(id: number) {
    try {
      const token = this.auth.getToken();
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      this.httpClient
        .post(`${this.BASE_URL}/Blogs/DeleteBlog/${id}`, id, {
          headers,
        })
        .subscribe();
      return 'Successful';
    } catch (error) {
      // console.log(error);
      return error;
    }
  }

  updateStatus(data: any) {
    try {
      const token = this.auth.getToken();
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      this.httpClient
        .post(`${this.BASE_URL}/Blogs/SetisActive`, data, { headers })
        .subscribe();
      return 'Successful';
    } catch (error) {
      return error;
    }
  }
}
