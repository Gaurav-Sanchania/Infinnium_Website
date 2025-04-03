using Infinnium_Website.Server.Models.Blogs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace Infinnium_Website.Server.Controllers
{
    [ApiController]
    [Route("BlogsController")]
    public class BlogController(IConfiguration configuration) : Controller
    {
        private readonly IConfiguration config = configuration;

        // GET: BlogController/GetAllBlogs
        [HttpGet]
        [Route("GetAllBlogs")]
        public List<BlogsModel> GetAllBlogs()
        {
            List<BlogsModel> blogs = new List<BlogsModel>();
            string cs = config.GetConnectionString("InfinniumDB");
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

                SqlCommand cmd = new SqlCommand("[dbo].[CRUD_Blogs]", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@case", 1);

                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read()) 
                {
                    var blog = new BlogsModel();

                    blog.Id = Convert.ToInt32(reader["BlogId"]);
                    blog.Title = reader["Title"].ToString();
                    blog.Description = reader["Description"].ToString();
                    blog.Brief = reader["Brief"].ToString();
                    blog.PublishedDate = reader["PublishedDate"].ToString();
                    blog.AuthorId = Convert.ToInt32(reader["AuthorId"]);
                    blog.AuthorName = reader["Name"].ToString();
                    blog.AuthorDepartment = reader["Department"].ToString();
                    blog.AuthorEmail = reader["Email"].ToString();
                    blog.ImageName = reader["ImageName"].ToString();

                    // Image Reader function
                    blog.Image = reader["ImagePath"].ToString();

                    blogs.Add(blog);
                }

                con.Close();
            }
            return blogs;
        }

        // GET: BlogController/GetBlogDetails/{id}
        [HttpGet]
        [Route("GetBlogDetails/{id}")]
        public BlogsModel GetBlogDetails(int id)
        {
            BlogsModel blog = new BlogsModel();
            string cs = config.GetConnectionString("InfinniumDB");
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

                SqlCommand cmd = new SqlCommand("[dbo].[CRUD_Blogs]", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@case", 2);
                cmd.Parameters.AddWithValue("@Id", id);

                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    blog.Id = Convert.ToInt32(reader["BlogId"]);
                    blog.Title = reader["Title"].ToString();
                    blog.Description = reader["Description"].ToString();
                    blog.Brief = reader["Brief"].ToString();
                    blog.PublishedDate = reader["PublishedDate"].ToString();
                    blog.AuthorId = Convert.ToInt32(reader["AuthorId"]);
                    blog.AuthorName = reader["Name"].ToString();
                    blog.AuthorDepartment = reader["Department"].ToString();
                    blog.AuthorEmail = reader["Email"].ToString();
                    blog.ImageName = reader["ImageName"].ToString();

                    // Image Reader function
                    blog.Image = reader["ImagePath"].ToString();
                }

                con.Close();
            }
            return blog;
        }

        // GET: BlogController/Top3Blogs
        [HttpGet]
        [Route("Top3Blogs")]
        public List<BlogsModel> Top3Blogs()
        {
            List<BlogsModel> blogs = new List<BlogsModel>();
            string cs = config.GetConnectionString("InfinniumDB");
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

                SqlCommand cmd = new SqlCommand("[dbo].[CRUD_Blogs]", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@case", 3);

                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    var blog = new BlogsModel();

                    blog.Id = Convert.ToInt32(reader["BlogId"]);
                    blog.Title = reader["Title"].ToString();
                    blog.Description = reader["Description"].ToString();
                    blog.Brief = reader["Brief"].ToString();
                    blog.PublishedDate = reader["PublishedDate"].ToString();
                    blog.AuthorId = Convert.ToInt32(reader["AuthorId"]);
                    blog.AuthorName = reader["Name"].ToString();
                    blog.AuthorDepartment = reader["Department"].ToString();
                    blog.AuthorEmail = reader["Email"].ToString();
                    blog.ImageName = reader["ImageName"].ToString();

                    // Image Reader function
                    blog.Image = reader["ImagePath"].ToString();

                    blogs.Add(blog);
                }

                con.Close();
            }
            return blogs;
        }

        //-----------------------------------------------------------------------------------------------------------------------------------

        // POST: BlogController/AddBlog
        [HttpPost]
        [Route("AddBlog")]
        public void AddBlog([FromBody] AddBlogModel blog)
        {
            string cs = config.GetConnectionString("InfinniumDB");
            using(SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

                SqlCommand cmd = new SqlCommand("[dbo].[CRUD_Blogs]", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@case", 4);
                cmd.Parameters.AddWithValue("@Title", blog.Title);
                cmd.Parameters.AddWithValue("@Description", blog.Description);
                cmd.Parameters.AddWithValue("@Brief", blog.Brief);
                cmd.Parameters.AddWithValue("@PublishedDate", blog.PublishedDate);
                cmd.Parameters.AddWithValue("@ImagePath", blog.Image);
                cmd.Parameters.AddWithValue("@ImageName", blog.ImageName);
                cmd.Parameters.AddWithValue("@AuthorId", blog.AuthorId);
                
                cmd.ExecuteNonQuery();

                con.Close();
            }
        }

        // POST: BlogController/EditBlog
        [HttpPost]
        [Route("EditBlog")]
        public void EditBlog([FromBody] EditBlogModel blog)
        {
            string cs = config.GetConnectionString("InfinniumDB");
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

                SqlCommand cmd = new SqlCommand("[dbo].[CRUD_Blogs]", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@case", 6);
                cmd.Parameters.AddWithValue("Id", blog.Id);
                cmd.Parameters.AddWithValue("@Title", blog.Title);
                cmd.Parameters.AddWithValue("@Description", blog.Description);
                cmd.Parameters.AddWithValue("@Brief", blog.Brief);
                cmd.Parameters.AddWithValue("@PublishedDate", blog.PublishedDate);
                cmd.Parameters.AddWithValue("@ImagePath", blog.Image);
                cmd.Parameters.AddWithValue("@ImageName", blog.ImageName);
                cmd.Parameters.AddWithValue("@AuthorId", blog.AuthorId);

                cmd.ExecuteNonQuery();

                con.Close();
            }
        }

        // POST: BlogController/DeleteBlog/{id}
        [HttpPost]
        [Route("DeleteBlog/{id}")]
        public void Delete(int id)
        {
            string cs = config.GetConnectionString("InfinniumDB");
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

                SqlCommand cmd = new SqlCommand("[dbo].[CRUD_Blogs]", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@case", 5);
                cmd.Parameters.AddWithValue("@Id", id);

                cmd.ExecuteNonQuery();

                con.Close();
            }
        }
    }
}
