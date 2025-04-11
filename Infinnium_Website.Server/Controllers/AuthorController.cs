using Infinnium_Website.Server.Models.Authors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace Infinnium_Website.Server.Controllers
{
    [ApiController]
    [Route("AuthorController")]
    public class AuthorController(IConfiguration configuration) : Controller
    {
        private readonly IConfiguration config = configuration; 

        // GET: AuthorController/GetAllAuthors
        [HttpGet]
        [Route("GetAllAuthors")]
        public List<AuthorModel> GetAllAuthors()
        {
            List<AuthorModel> authors = new List<AuthorModel>();
            string cs = config.GetConnectionString("InfinniumDB");
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

                SqlCommand cmd = new SqlCommand("[dbo].[CRUD_Authors]", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@case", 1);
                
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read()) 
                {
                    var author = new AuthorModel();

                    author.Id = Convert.ToInt32(reader["Id"]);
                    author.Name = Convert.ToString(reader["Name"]);
                    author.Email = Convert.ToString(reader["Email"]);
                    author.Designation = Convert.ToString(reader["Designation"]);
                    author.Description = Convert.ToString(reader["Description"]);
                    author.Guid = Convert.ToString(reader["ShortGuid"]);

                    if (reader["Image"] != DBNull.Value)
                    {
                        author.Image = (byte[])reader["Image"];
                        author.ImageName = Convert.ToString(reader["ImageName"]);
                    } else
                    {
                        author.Image = null;
                        author.ImageName = null;
                    }

                    authors.Add(author);
                }

                con.Close();
            }
            return authors;
        }

        // GET: AuthorController/AuthorDetails/{id}
        [HttpGet]
        [Route("AuthorDetails/{id}")]
        public AuthorModel AuthorDetails(string id)
        {
            var author = new AuthorModel();
            string cs = config.GetConnectionString("InfinniumDB");
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

                SqlCommand cmd = new SqlCommand("[dbo].[CRUD_Authors]", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@case", 2);
                cmd.Parameters.AddWithValue("@ShortGuid", id);

                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    author.Id = Convert.ToInt32(reader["Id"]);
                    author.Name = Convert.ToString(reader["Name"]);
                    author.Email = Convert.ToString(reader["Email"]);
                    author.Designation = Convert.ToString(reader["Designation"]);
                    author.Description = Convert.ToString(reader["Description"]);
                    author.Guid = Convert.ToString(reader["ShortGuid"]);

                    if (reader["Image"] != null)
                    {
                        author.Image = (byte[])reader["Image"];
                        author.ImageName = Convert.ToString(reader["ImageName"]);
                    } else
                    {
                        author.Image = null;
                        author.ImageName = null;
                    }
                }

                con.Close();
            }
            return author;
        }
    }
}
