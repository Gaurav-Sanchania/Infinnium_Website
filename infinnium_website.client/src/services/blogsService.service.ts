/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: "root",
})

export class BlogsService {
    constructor(private httpClient: HttpClient) {}

    async getAllBlogs(): Promise<{ id: number; title: string; description: string; brief: string; publishedDate: string; image: string,
        imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string }[]> {
        // https://localhost:7046/BlogsController/GetAllBlogs
        try {
            const response = await firstValueFrom(
                this.httpClient.get<{ id: number; title: string; description: string; brief: string; publishedDate: string; image: string,
                    imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string }[]>
                    (`https://localhost:7046/BlogsController/GetAllBlogs`));
            return response;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async getBlogDetails(id: number): Promise<{ id: number; title: string; description: string; brief: string; publishedDate: string; image: string,
        imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string }[]> {
        // https://localhost:7046/BlogsController/GetBlogDetails/{id}
        try {
            const response = await firstValueFrom(
                this.httpClient.get<{ id: number; title: string; description: string; brief: string; publishedDate: string; image: string,
                    imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string }[]>
                    (`https://localhost:7046/BlogsController/GetBlogDetails/${id}`));
            return response;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async getTop3Blogs(): Promise <{ id: number; title: string; description: string; brief: string; publishedDate: string; image: string,
        imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string }[]> {
        // https://localhost:7046/BlogsController/Top3Blogs
        try {
            const response = await firstValueFrom(
                this.httpClient.get<{ id: number; title: string; description: string; brief: string; publishedDate: string; image: string,
                    imageName: string; authorId: number; authorName: string; authorEmail: string; authorDepartment: string }[]>("https://localhost:7046/BlogsController/Top3Blogs"));
            return response;
        } catch (error) {
            console.log(error);
            return [];            
        }
    }

    // All post methods are yet to be tested

    addBlog(blog: any) {
        try {
            this.httpClient.post("https://localhost:7046/BlogsController/AddBlog", blog).subscribe();
            return 'Successful';
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    editBlog(blog: any) {
        try {
            this.httpClient.post("https://localhost:7046/BlogsController/EditBlog", blog).subscribe();
            return 'Successful';
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    deleteBlog(id: number) {
        try {
            this.httpClient.post(`https://localhost:7046/BlogsController/DeleteBlog/${id}`, id).subscribe();
            return 'Successful';
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}