using System.Data;
using System.Reflection.Metadata;
using Infinnium_Website.Server.Models.Authors;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using static System.Net.Mime.MediaTypeNames;

namespace Infinnium_Website.Server.Controllers
{
    [ApiController]
    [Route("AuthorController")]
    public class AuthorController(ConnectionStringService connectionStringService) : Controller
    {
        private readonly ConnectionStringService config = connectionStringService; 

        // GET: AuthorController/GetAllAuthors
        [HttpGet]
        [Route("GetAllAuthors")]
        public List<AuthorModel> GetAllAuthors()
        {
            List<AuthorModel> authors = new List<AuthorModel>();
            string cs = config.GenerateConnection();
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
                    author.SocialMediaLink = Convert.ToString(reader["SocialLink"]);

                    if (reader["Images"] != DBNull.Value)
                    {
                        author.Image = (byte[])reader["Images"];
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
            string cs = config.GenerateConnection();
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
                    author.SocialMediaLink = Convert.ToString(reader["SocialLink"]);

                    if (reader["Images"] != null)
                    {
                        author.Image = (byte[])reader["Images"];
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

        // -----------------------------------------------------------------------------------------------------------------------

        // POST: AuthorController/AddAuthor
        [HttpPost]
        [Authorize]
        [Route("AddAuthor")]
        public void AddAuthor()
        {
            var member = new AddAuthorModel
            {
                Name = Request.Form["Name"],
                Email = Request.Form["Email"],
                Description = Request.Form["Description"],
                Designation = Request.Form["Designation"],
                LinkedInLink = Request.Form["LinkedInLink"],
                ImageName = Request.Form["ImageName"],
            };

            IFormFile Image = Request.Form.Files["Image"];

            string cs = config.GenerateConnection();
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

                SqlCommand cmd = new SqlCommand("[dbo].[CRUD_Authors]", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@case", 3);
                cmd.Parameters.AddWithValue("@Name", member.Name);
                cmd.Parameters.AddWithValue("@Email", member.Email);
                cmd.Parameters.AddWithValue("@Description", member.Description);
                cmd.Parameters.AddWithValue("@Designation", member.Designation);
                cmd.Parameters.AddWithValue("@SocialLink", member.LinkedInLink);

                if (Image != null)
                {
                    byte[] imageData;
                    using (var binaryReader = new BinaryReader(Image.OpenReadStream()))
                    {
                        imageData = binaryReader.ReadBytes((int)Image.Length);
                    }
                    cmd.Parameters.AddWithValue("@Images", imageData);
                    cmd.Parameters.AddWithValue("@ImageName", member.ImageName);
                }
                //else
                //{
                //    cmd.Parameters.AddWithValue("@Images", null);
                //    cmd.Parameters.AddWithValue("@ImageName", null);
                //}

                cmd.ExecuteNonQuery();

                con.Close();
            }
        }

        // POST: AuthorController/EditAuthorDetails
        [HttpPost]
        [Authorize]
        [Route("EditAuthorDetails")]
        public void EditAuthorDetails()
        {
            var member = new EditAuthorModel
            {
                Name = Request.Form["Name"],
                Email = Request.Form["Email"],
                Designation = Request.Form["Designation"],
                Description = Request.Form["Description"],
                LinkedInLink = Request.Form["LinkedInLink"],
                Guid = Request.Form["Guid"],
                ImageName = Request.Form["ImageName"]
            };

            IFormFile Image = Request.Form.Files["Image"];

            string cs = config.GenerateConnection();
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

                SqlCommand cmd = new SqlCommand("[dbo].[CRUD_Authors]", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@case", 5);
                cmd.Parameters.AddWithValue("@ShortGuid", member.Guid);
                cmd.Parameters.AddWithValue("@Name", member.Name);
                cmd.Parameters.AddWithValue("@Email", member.Email);
                cmd.Parameters.AddWithValue("@Description", member.Description);
                cmd.Parameters.AddWithValue("@Designation", member.Designation);
                cmd.Parameters.AddWithValue("@SocialLink", member.LinkedInLink);

                if (Image != null)
                {
                    byte[] imageData;
                    using (var binaryReader = new BinaryReader(Image.OpenReadStream()))
                    {
                        imageData = binaryReader.ReadBytes((int)Image.Length);
                    }
                    cmd.Parameters.AddWithValue("@Image", imageData);
                    cmd.Parameters.AddWithValue("@ImageName", member.ImageName);
                }

                cmd.ExecuteNonQuery();

                con.Close();
            }
        }

        // -----------------------------------------------------------------------------------------------------------------------

        // ONLY FOR DEVELOPMENT PURPOSE

        // POST: AuthorController/AddImage
        //[HttpPost]
        //[Authorize]
        //[Route("AddImage")]
        //public void AddImage()
        //{
        //    IFormFile image = Request.Form.Files["Image"];

        //    string cs = config.GetConnectionString("InfinniumDB");
        //    using (SqlConnection con = new SqlConnection(cs))
        //    {
        //        con.Open();

        //        if (image != null)
        //        {
        //            byte[] imageData;
        //            using (var binaryReader = new BinaryReader(image.OpenReadStream()))
        //            {
        //                imageData = binaryReader.ReadBytes((int)image.Length);
        //            }

        //            SqlCommand cmd = new SqlCommand("UPDATE Authors SET Images = @Image WHERE Authors.Id = 10", con);
        //            cmd.Parameters.Add("@Image", SqlDbType.VarBinary).Value = imageData;
        //            cmd.ExecuteNonQuery();
        //        }

        //        con.Close();
        //    }
        //}

    }
}
