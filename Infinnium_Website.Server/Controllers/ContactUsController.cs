using Infinnium_Website.Server.Interfaces;
using Infinnium_Website.Server.Models.Contact_Us;
using Infinnium_Website.Server.Models.Email;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace Infinnium_Website.Server.Controllers
{
    [ApiController]
    [Route("ContactUsController")]
    public class ContactUsController : Controller
    {
        private readonly IConfiguration config;
        private readonly IEmailSenderService emailSender;

        public ContactUsController(IConfiguration configuration, IEmailSenderService emailSenderService)
        {
            this.config = configuration;
            this.emailSender = emailSenderService;
        }

        // GET: ContactUsController/GetAllContactUs
        [HttpGet]
        [Route("GetAllContactUs")]
        public List<ContactUsModel> GetAllContactUs()
        {
            List<ContactUsModel> allRecords = new List<ContactUsModel>();
            string cs = config.GetConnectionString("InfinniumDB");
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

                    contactUs.Id = Convert.ToInt32(reader["Id"]);
                    contactUs.FirstName = reader["FirstName"].ToString();
                    contactUs.LastName = reader["LastName"].ToString();
                    contactUs.Email = reader["Email"].ToString();
                    contactUs.Phone = reader["Phone"].ToString();
                    contactUs.Message = reader["Description"].ToString();

                    allRecords.Add(contactUs);
                }

                con.Close();
            }
            return allRecords;
        }

        // GET: ContactUsController/ContactUsDetails/{id}
        [HttpGet]
        [Route("ContactUsDetails/{id}")]
        public ContactUsModel ContactUsDetails(int id)
        {
            ContactUsModel contactUs = new ContactUsModel();
            string cs = config.GetConnectionString("InfinniumDB");
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

                SqlCommand cmd = new SqlCommand("[dbo].[CRUD_ContactUs]", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@case", 2);
                cmd.Parameters.AddWithValue("@Id", id);

                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    contactUs.Id = Convert.ToInt32(reader["Id"]);
                    contactUs.FirstName = reader["FirstName"].ToString();
                    contactUs.LastName = reader["LastName"].ToString();
                    contactUs.Email = reader["Email"].ToString();
                    contactUs.Phone = reader["Phone"].ToString();
                    contactUs.Message = reader["Description"].ToString();
                }

                con.Close();
            }
            return contactUs;
        }

        //--------------------------------------------------------------------------------------------------------------------------------

        // POST: ContactUsController/CreateContactUs
        [HttpPost]
        [Route("CreateContactUs")]
        public void CreateContactUs([FromBody] AddContactUsModel record)
        {
            string cs = config.GetConnectionString("InfinniumDB");
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
        }

        // POST: ContactUsController/UpdateContactUs
        [HttpPost]
        [Route("UpdateContactUs")]
        public void UpdateContactUs([FromBody] EditContactUsModel record)
        {
            string cs = config.GetConnectionString("InfinniumDB");
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

                SqlCommand cmd = new SqlCommand("[dbo].[CRUD_ContactUs]", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@case", 5);
                cmd.Parameters.AddWithValue("@Id", record.Id);
                cmd.Parameters.AddWithValue("@isActive", record.isActive);

                cmd.ExecuteNonQuery();

                con.Close();
            }
        }

        // POST: ContactUsController/DeleteContactUs/{id}
        [HttpPost]
        [Route("DeleteContactUs/{id}")]
        public void DeleteContactUs(int id)
        {
            string cs = config.GetConnectionString("InfinniumDB");
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

                SqlCommand cmd = new SqlCommand("[dbo].[CRUD_ContactUs]", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@case", 4);
                cmd.Parameters.AddWithValue("@Id", id);

                cmd.ExecuteNonQuery();

                con.Close();
            }
        }

        // POST: ContactUsController/SendEmail
        [HttpPost]
        [Route("SendEmail")]
        public async Task<IActionResult> SendEmail(EmailRequest user)
        {
            //var receiver = "gauravsanchania@gmail.com";
            //var subject = "Test Email";
            //var body = "This is a test email.";

            try
            {
                await emailSender.SendEmailAsync(user.Receiver, user.Subject, user.Body);
                return Ok("Email sent successfully.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Failed to send email: {ex.Message}");
            }
        }
    }
}
