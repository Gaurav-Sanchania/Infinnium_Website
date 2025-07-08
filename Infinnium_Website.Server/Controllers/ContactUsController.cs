using Infinnium_Website.Server.Interfaces;
using Infinnium_Website.Server.Models.Contact_Us;
using Infinnium_Website.Server.Models.Email;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace Infinnium_Website.Server.Controllers
{
    [ApiController]
    [Route("api/ContactUsController")]
    public class ContactUsController : Controller
    {
        private readonly ConnectionStringService config;
        private readonly IEmailSenderService emailSender;

        public ContactUsController(ConnectionStringService connectionStringService, IEmailSenderService emailSenderService)
        {
            this.config = connectionStringService;
            this.emailSender = emailSenderService;
        }

        // GET: ContactUsController/GetAllContactUs
        [HttpGet]
        [Authorize]
        [Route("GetAllContactUs")]
        public List<ContactUsModel> GetAllContactUs()
        {
            List<ContactUsModel> allRecords = new List<ContactUsModel>();
            string cs = config.GenerateConnection();
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

                SqlCommand cmd = new SqlCommand("[dbo].[CRUD_ContactUs]", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@case", 1);

                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    var contactUs = new ContactUsModel();

                    //contactUs.Id = Convert.ToInt32(reader["Id"]);
                    contactUs.FirstName = reader["FirstName"].ToString();
                    //contactUs.LastName = reader["LastName"].ToString();
                    contactUs.Email = reader["Email"].ToString();
                    //contactUs.Phone = reader["Phone"].ToString();
                    contactUs.Message = reader["Description"].ToString();
                    contactUs.isActive = (bool)reader["isActive"];
                    contactUs.Guid = reader["ShortGuid"].ToString();

                    allRecords.Add(contactUs);
                }

                con.Close();
            }
            return allRecords;
        }

        // GET: ContactUsController/ContactUsDetails/{id}
        //[HttpGet]
        //[Authorize]
        //[Route("ContactUsDetails/{id}")]
        //public ContactUsModel ContactUsDetails(int id)
        //{
        //    ContactUsModel contactUs = new ContactUsModel();
        //    string cs = config.GetConnectionString("InfinniumDB");
        //    using (SqlConnection con = new SqlConnection(cs))
        //    {
        //        con.Open();

        //        SqlCommand cmd = new SqlCommand("[dbo].[CRUD_ContactUs]", con);
        //        cmd.CommandType = System.Data.CommandType.StoredProcedure;

        //        cmd.Parameters.AddWithValue("@case", 2);
        //        cmd.Parameters.AddWithValue("@Id", id);

        //        SqlDataReader reader = cmd.ExecuteReader();
        //        while (reader.Read())
        //        {
        //            contactUs.Id = Convert.ToInt32(reader["Id"]);
        //            contactUs.FirstName = reader["FirstName"].ToString();
        //            contactUs.LastName = reader["LastName"].ToString();
        //            contactUs.Email = reader["Email"].ToString();
        //            contactUs.Phone = reader["Phone"].ToString();
        //            contactUs.Message = reader["Description"].ToString();
        //        }

        //        con.Close();
        //    }
        //    return contactUs;
        //}

        //--------------------------------------------------------------------------------------------------------------------------------

        // POST: ContactUsController/CreateContactUs
        [HttpPost]
        [Route("CreateContactUs")]
        public async Task<IActionResult> CreateContactUs([FromBody] AddContactUsModel record)
        {
            string cs = config.GenerateConnection();
            try
            {
                using (SqlConnection con = new SqlConnection(cs))
                {
                    con.Open();

                    SqlCommand cmd = new SqlCommand("[dbo].[CRUD_ContactUs]", con);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;

                    cmd.Parameters.AddWithValue("@case", 3);
                    cmd.Parameters.AddWithValue("@FirstName", record.FirstName);
                    //cmd.Parameters.AddWithValue("@LastName", record.LastName);
                    cmd.Parameters.AddWithValue("@Email", record.Email);
                    //cmd.Parameters.AddWithValue("@Phone", record.Phone);
                    cmd.Parameters.AddWithValue("@Description", record.Message);

                    cmd.ExecuteNonQuery();

                    con.Close();
                }
                await SendEmail(new EmailRequest
                {
                    Receiver = record.Email ?? "",
                    Subject = "Great to here from you!",
                    Body = $"{record.Message} Thank you for reaching out to us. We will get back to you soon."
                });
                return Ok("Create contact us operation successfully executed.");
            } catch(Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
                return Ok("Create contact us operation failed.");
            }
        }

        // Set Contact Us record Active/inActive
        // POST: ContactUsController/UpdateContactUs
        [HttpPost]
        [Authorize]
        [Route("UpdateContactUs")]
        public void UpdateContactUs()
        {
            var record = new EditContactUsModel()
            {
                isActive = Convert.ToBoolean(Request.Form["isActive"]),
                Id = Request.Form["Id"]
            };

            string cs = config.GenerateConnection();
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

                SqlCommand cmd = new SqlCommand("[dbo].[CRUD_ContactUs]", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@case", 5);
                cmd.Parameters.AddWithValue("@ShortGuid", record.Id);
                cmd.Parameters.AddWithValue("@isActive", record.isActive);

                cmd.ExecuteNonQuery();

                con.Close();
            }
        }

        //// POST: ContactUsController/DeleteContactUs/{id}
        //[HttpPost]
        //[Authorize]
        //[Route("DeleteContactUs/{id}")]
        //public void DeleteContactUs(int id)
        //{
        //    string cs = config.GetConnectionString("InfinniumDB");
        //    using (SqlConnection con = new SqlConnection(cs))
        //    {
        //        con.Open();

        //        SqlCommand cmd = new SqlCommand("[dbo].[CRUD_ContactUs]", con);
        //        cmd.CommandType = System.Data.CommandType.StoredProcedure;

        //        cmd.Parameters.AddWithValue("@case", 4);
        //        cmd.Parameters.AddWithValue("@Id", id);

        //        cmd.ExecuteNonQuery();

        //        con.Close();
        //    }
        //}

        // POST: ContactUsController/SendEmail
        [HttpPost]
        [Route("SendEmail")]
        public async Task<IActionResult> SendEmail(EmailRequest user)
        {
            string templatePath = Path.Combine(Directory.GetCurrentDirectory(), "Templates", "email.html");
            string htmlBody = await System.IO.File.ReadAllTextAsync(templatePath);

            // Replace placeholders if needed
            htmlBody = htmlBody.Replace("[User's Name]", "John Doe");

            try
            {
                await emailSender.SendEmailAsync(user.Receiver, user.Subject, htmlBody);
                return Ok("Email sent successfully.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Failed to send email: {ex.Message}");
            }
        }
    }
}
