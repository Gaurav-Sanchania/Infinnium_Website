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
                    singleNews  .AuthorDepartment = reader["Department"].ToString();
                    singleNews.AuthorEmail = reader["Email"].ToString();
                    singleNews.ImageName = reader["ImageName"].ToString();

                    // Image Reader function
                    singleNews.Image = reader["ImagePath"].ToString();

                    news.Add(singleNews);
                }

                con.Close();
            }
            return news;
        }

        // GET: NewsController/GetNewsDetails/{id}
        [HttpGet]
        [Route("GetNewsDetails/{id}")]
        public NewsModel GetNewsDetails(int id)
        {
            NewsModel news = new NewsModel();
            string cs = config.GetConnectionString("InfinniumDB");
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

                SqlCommand cmd = new SqlCommand("[dbo].[CRUD_NewsAndEvents]", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@case", 2);
                cmd.Parameters.AddWithValue("@Id", id);

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
                    news.AuthorDepartment = reader["Department"].ToString();
                    news.AuthorEmail = reader["Email"].ToString();
                    news.ImageName = reader["ImageName"].ToString();

                    // Image Reader function
                    news.Image = reader["ImagePath"].ToString();
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
                    singleNews.AuthorDepartment = reader["Department"].ToString();
                    singleNews.AuthorEmail = reader["Email"].ToString();
                    singleNews.ImageName = reader["ImageName"].ToString();

                    // Image Reader function
                    singleNews.Image = reader["ImagePath"].ToString();

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
        public void AddNews([FromBody] AddNewsModel news)
        {
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
                cmd.Parameters.AddWithValue("@ImagePath", news.Image);
                cmd.Parameters.AddWithValue("@ImageName", news.ImageName);
                cmd.Parameters.AddWithValue("@AuthorId", news.AuthorId);

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
