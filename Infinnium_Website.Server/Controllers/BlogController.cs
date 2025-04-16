using Infinnium_Website.Server.Models.Blogs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using static System.Net.Mime.MediaTypeNames;

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
                    blog.AuthorDesignation = reader["Designation"].ToString();
                    blog.AuthorEmail = reader["Email"].ToString();
                    blog.ImageName = reader["ImageName"].ToString();
                    blog.Guid = reader["ShortGuid"].ToString();

                    // Image Reader function
                    byte[] imageData = reader["ImagePath"] as byte[];
                    if (imageData != null)
                    {
                        blog.Image = Convert.ToBase64String((byte[])imageData);
                    }

                    blogs.Add(blog);
                }

                con.Close();
            }
            return blogs;
        }

        // GET: BlogController/GetBlogDetails/{id}
        [HttpGet]
        [Route("GetBlogDetails/{id}")]
        public BlogsModel GetBlogDetails(string id)
        {
            BlogsModel blog = new BlogsModel();
            string cs = config.GetConnectionString("InfinniumDB");
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

                SqlCommand cmd = new SqlCommand("[dbo].[CRUD_Blogs]", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@case", 2);
                cmd.Parameters.AddWithValue("@ShortGuid", id);

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
                    blog.AuthorDesignation = reader["Designation"].ToString();
                    blog.AuthorEmail = reader["Email"].ToString();
                    blog.ImageName = reader["ImageName"].ToString();
                    blog.Guid = reader["ShortGuid"].ToString();
                    blog.isActive = (bool)reader["isActive"];

                    // Image Reader function
                    byte[] imageData = reader["ImagePath"] as byte[];
                    if (imageData != null)
                    {
                        blog.Image = Convert.ToBase64String((byte[])imageData);
                    }
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
                    blog.AuthorDesignation = reader["Designation"].ToString();
                    blog.AuthorEmail = reader["Email"].ToString();
                    blog.ImageName = reader["ImageName"].ToString();
                    blog.Guid = reader["ShortGuid"].ToString();

                    // Image Reader function
                    byte[] imageData = reader["ImagePath"] as byte[];
                    if (imageData != null)
                    {
                        blog.Image = Convert.ToBase64String((byte[])imageData);
                    }

                    blogs.Add(blog);
                }

                con.Close();
            }
            return blogs;
        }

        //----------------------------------------------------------------------------------------------------------------------------------

        // POST: BlogController/AddBlog
        [HttpPost]
        [Route("AddBlog")]
        public void AddBlog()
        {
            var blog = new AddBlogModel
            {
                Title = Request.Form["Title"],
                Description = Request.Form["Description"],
                Brief = Request.Form["Brief"],
                PublishedDate = Request.Form["PublishedDate"],
                AuthorId = int.Parse(Request.Form["AuthorId"]),
                ImageName = Request.Form["ImageName"]
            };

            IFormFile image = Request.Form.Files["Image"];

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
                cmd.Parameters.AddWithValue("@AuthorId", blog.AuthorId);

                if (image != null)
                {
                    byte[] imageData;
                    using (var binaryReader = new BinaryReader(image.OpenReadStream()))
                    {
                        imageData = binaryReader.ReadBytes((int)image.Length);
                    }
                    cmd.Parameters.AddWithValue("@ImagePath", imageData);
                    cmd.Parameters.AddWithValue("@ImageName", blog.ImageName);
                }
                else
                {
                    cmd.Parameters.AddWithValue("@ImagePath", DBNull.Value);
                    cmd.Parameters.AddWithValue("@ImageName", DBNull.Value);
                }

                cmd.ExecuteNonQuery();

                con.Close();
            }
        }

        // POST: BlogController/EditBlog
        [HttpPost]
        [Route("EditBlog")]
        public void EditBlog()
        {
            var blog = new EditBlogModel
            {
                Title = Request.Form["Title"],
                Description = Request.Form["Description"],
                Brief = Request.Form["Brief"],
                PublishedDate = Request.Form["PublishedDate"],
                AuthorId = int.Parse(Request.Form["AuthorId"]),
                ImageName = Request.Form["ImageName"],
                isActive = bool.Parse(Request.Form["isActive"]),
                Id = Request.Form["Id"],
            };

            IFormFile Image = Request.Form.Files["Image"];

            string cs = config.GetConnectionString("InfinniumDB");
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

                SqlCommand cmd = new SqlCommand("[dbo].[CRUD_Blogs]", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@case", 6);
                cmd.Parameters.AddWithValue("@ShortGuid", blog.Id);
                cmd.Parameters.AddWithValue("@Title", blog.Title);
                cmd.Parameters.AddWithValue("@Description", blog.Description);
                cmd.Parameters.AddWithValue("@Brief", blog.Brief);
                cmd.Parameters.AddWithValue("@PublishedDate", blog.PublishedDate);
                cmd.Parameters.AddWithValue("@AuthorId", blog.AuthorId);
                cmd.Parameters.AddWithValue("@isActive", blog.isActive);

                if (Image != null)
                {
                    byte[] imageData;
                    using (var binaryReader = new BinaryReader(Image.OpenReadStream()))
                    {
                        imageData = binaryReader.ReadBytes((int)Image.Length);
                    }
                    cmd.Parameters.AddWithValue("@ImagePath", imageData);
                    cmd.Parameters.AddWithValue("@ImageName", blog.ImageName);
                }
                else
                {
                    cmd.Parameters.AddWithValue("@ImagePath", null);
                    cmd.Parameters.AddWithValue("@ImageName", null);
                }

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

        // POST: BlogController/SetisActive
        [HttpPost]
        [Route("SetisActive")]
        public void SetisActive([FromBody] SetActiveStatusBlogModel active)
        {
            string cs = config.GetConnectionString("InfinniumDB");
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

                SqlCommand cmd = new SqlCommand("[dbo].[CRUD_Blogs]", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@case", 7);
                cmd.Parameters.AddWithValue("@Id", active.Id);
                cmd.Parameters.AddWithValue("@isActive", active.IsActive);

                cmd.ExecuteNonQuery();

                con.Close();
            }
        }
    }
}
