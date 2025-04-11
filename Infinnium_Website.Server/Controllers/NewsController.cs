using Infinnium_Website.Server.Models.Blogs;
using Infinnium_Website.Server.Models.News;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace Infinnium_Website.Server.Controllers
{
    [ApiController]
    [Route("NewsAndEventsController")]
    public class NewsController(IConfiguration configuration) : Controller
    {
        private readonly IConfiguration config = configuration;

        // GET: NewsController/GetAllNews
        [HttpGet]
        [Route("GetAllNews")]
        public List<NewsModel> GetAllNews()
        {
            List<NewsModel> news = new List<NewsModel>();
            string cs = config.GetConnectionString("InfinniumDB");
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

                SqlCommand cmd = new SqlCommand("[dbo].[CRUD_NewsAndEvents]", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@case", 1);

                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    var singleNews = new NewsModel();

                    singleNews.Id = Convert.ToInt32(reader["NewsId"]);
                    singleNews.Title = reader["Title"].ToString();
                    singleNews.Description = reader["Description"].ToString();
                    singleNews.Brief = reader["Brief"].ToString();
                    singleNews.PublishedDate = reader["PublishedDate"].ToString();
                    singleNews.AuthorId = Convert.ToInt32(reader["AuthorId"]);
                    singleNews.AuthorName = reader["Name"].ToString();
                    singleNews.AuthorDesignation = reader["Designation"].ToString();
                    singleNews.AuthorEmail = reader["Email"].ToString();
                    singleNews.ImageName = reader["ImageName"].ToString();
                    singleNews.Guid = reader["ShortGuid"].ToString();

                    // Image Reader function
                    byte[] imageData = reader["ImagePath"] as byte[];
                    if(imageData != null)
                    {
                        singleNews.Image = Convert.ToBase64String((byte[])imageData);
                    }

                    news.Add(singleNews);
                }

                con.Close();
            }
            return news;
        }

        // GET: NewsController/GetNewsDetails/{id}
        [HttpGet]
        [Route("GetNewsDetails/{id}")]
        public NewsModel GetNewsDetails(string id)
        {
            NewsModel news = new NewsModel();
            string cs = config.GetConnectionString("InfinniumDB");
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

                SqlCommand cmd = new SqlCommand("[dbo].[CRUD_NewsAndEvents]", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@case", 2);
                cmd.Parameters.AddWithValue("@ShortGuid", id);

                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    news.Id = Convert.ToInt32(reader["NewsId"]);
                    news.Title = reader["Title"].ToString();
                    news.Description = reader["Description"].ToString();
                    news.Brief = reader["Brief"].ToString();
                    news.PublishedDate = reader["PublishedDate"].ToString();
                    news.AuthorId = Convert.ToInt32(reader["AuthorId"]);
                    news.AuthorName = reader["Name"].ToString();
                    news.AuthorDesignation = reader["Designation"].ToString();
                    news.AuthorEmail = reader["Email"].ToString();
                    news.ImageName = reader["ImageName"].ToString();
                    news.Guid = reader["ShortGuid"].ToString();

                    // Image Reader function
                    byte[] imageData = reader["ImagePath"] as byte[];
                    if (imageData != null)
                    {
                        news.Image = Convert.ToBase64String((byte[])imageData);
                    }
                }

                con.Close();
            }
            return news;
        }

        // GET: NewsController/Top3News
        [HttpGet]
        [Route("Top3News")]
        public List<NewsModel> Top3News()
        {
            List<NewsModel> news = new List<NewsModel>();
            string cs = config.GetConnectionString("InfinniumDB");
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

                SqlCommand cmd = new SqlCommand("[dbo].[CRUD_NewsAndEvents]", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@case", 3);

                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    var singleNews = new NewsModel();

                    singleNews.Id = Convert.ToInt32(reader["NewsId"]);
                    singleNews.Title = reader["Title"].ToString();
                    singleNews.Description = reader["Description"].ToString();
                    singleNews.Brief = reader["Brief"].ToString();
                    singleNews.PublishedDate = reader["PublishedDate"].ToString();
                    singleNews.AuthorId = Convert.ToInt32(reader["AuthorId"]);
                    singleNews.AuthorName = reader["Name"].ToString();
                    singleNews.AuthorDesignation = reader["Designation"].ToString();
                    singleNews.AuthorEmail = reader["Email"].ToString();
                    singleNews.ImageName = reader["ImageName"].ToString();
                    singleNews.Guid = reader["ShortGuid"].ToString();

                    // Image Reader function
                    byte[] imageData = reader["ImagePath"] as byte[];
                    if (imageData != null)
                    {
                        singleNews.Image = Convert.ToBase64String((byte[])imageData);
                    }

                    news.Add(singleNews);
                }

                con.Close();
            }
            return news;
        }

        //-----------------------------------------------------------------------------------------------------------------------------------

        // POST: NewsController/AddNews
        [HttpPost]
        [Route("AddNews")]
        public void AddNews()
        {
            var news = new AddNewsModel
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
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

                SqlCommand cmd = new SqlCommand("[dbo].[CRUD_NewsAndEvents]", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@case", 4);
                cmd.Parameters.AddWithValue("@Title", news.Title);
                cmd.Parameters.AddWithValue("@Description", news.Description);
                cmd.Parameters.AddWithValue("@Brief", news.Brief);
                cmd.Parameters.AddWithValue("@PublishedDate", news.PublishedDate);
                cmd.Parameters.AddWithValue("@AuthorId", news.AuthorId);

                if (image != null)
                {
                    byte[] imageData;
                    using (var binaryReader = new BinaryReader(image.OpenReadStream()))
                    {
                        imageData = binaryReader.ReadBytes((int)image.Length);
                    }
                    cmd.Parameters.AddWithValue("@ImagePath", imageData);
                    cmd.Parameters.AddWithValue("@ImageName", news.ImageName);
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

        // POST: NewsController/EditNews
        [HttpPost]
        [Route("EditNews")]
        public void EditNews([FromBody] EditNewsModel news)
        {
            string cs = config.GetConnectionString("InfinniumDB");
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

                SqlCommand cmd = new SqlCommand("[dbo].[CRUD_NewsAndEvents]", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@case", 6);
                cmd.Parameters.AddWithValue("Id", news.Id);
                cmd.Parameters.AddWithValue("@Title", news.Title);
                cmd.Parameters.AddWithValue("@Description", news.Description);
                cmd.Parameters.AddWithValue("@Brief", news.Brief);
                cmd.Parameters.AddWithValue("@PublishedDate", news.PublishedDate);
                cmd.Parameters.AddWithValue("@ImagePath", news.Image);
                cmd.Parameters.AddWithValue("@ImageName", news.ImageName);
                cmd.Parameters.AddWithValue("@AuthorId", news.AuthorId);

                cmd.ExecuteNonQuery();

                con.Close();
            }
        }

        // POST: NewsController/DeleteNews/{id}
        [HttpPost]
        [Route("DeleteNews/{id}")]
        public void DeleteNews(int id)
        {
            string cs = config.GetConnectionString("InfinniumDB");
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

                SqlCommand cmd = new SqlCommand("[dbo].[CRUD_NewsAndEvents]", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@case", 5);
                cmd.Parameters.AddWithValue("@Id", id);

                cmd.ExecuteNonQuery();

                con.Close();
            }
        }
    }
}
