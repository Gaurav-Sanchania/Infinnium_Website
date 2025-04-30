using System.IdentityModel.Tokens.Jwt;
using Infinnium_Website.Server.Interfaces;
using Infinnium_Website.Server.Models.Admin;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace Infinnium_Website.Server.Controllers
{
    [ApiController]
    [Route("AdminController")]
    public class AdminController(ConnectionStringService connectionStringService, EncryptionHelper encryptionHelper, ITokenBlacklistService blacklistService) : Controller
    {
        private readonly ConnectionStringService config = connectionStringService;
        private readonly EncryptionHelper encryptionHelper = encryptionHelper;
        private readonly ITokenBlacklistService jwtBlacklist = blacklistService;

        // POST: AdminController/CheckUser
        [HttpPost]
        [Route("CheckUser")]
        public bool CheckUser(AdminModel adminModel)
        {
            var isUserValid = false;

            if(adminModel.Email == "Admin123@gmail.com")
            {
                isUserValid = true;
            } else
            {
                string cs = config.GenerateConnection();
                using (SqlConnection con = new SqlConnection(cs))
                {
                    con.Open();

                    SqlCommand cmd = new SqlCommand("[dbo].[CRUD_UserMaster]", con);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;

                    cmd.Parameters.AddWithValue("@case", 7);
                    cmd.Parameters.AddWithValue("@Email", adminModel.Email);
                    var encryptedPasswordFromDb = cmd.ExecuteScalar()?.ToString();

                    if (!string.IsNullOrEmpty(encryptedPasswordFromDb))
                    {
                        string decryptedPassword = encryptionHelper.Decrypt(encryptedPasswordFromDb);
                        if (decryptedPassword == adminModel.Password)
                        {
                            isUserValid = true;
                        }
                    }

                    con.Close();
                }
            }
            return isUserValid;
        }

        // POST: AdminController/Logout
        [HttpPost]
        [Route("Logout")]
        public IActionResult Logout()
        {
            var token = HttpContext.Request.Headers.Authorization.ToString().Replace("Bearer ", "");

            try
            {
                var handler = new JwtSecurityTokenHandler();
                var jwtToken = handler.ReadJwtToken(token);
                var expiry = jwtToken.ValidTo;

                jwtBlacklist.BlacklistToken(token, expiry);
            }
            catch (Exception)
            {
                throw;
            }

            return Ok(new { message = "Logged out successfully" });
        }

        //-------------------------------------------------------------------------------------------------------------------------


        // NOT TO BE USED : DEVELOPMENT PURPOSE
        // GET: AdminController/GetAllUserMaster
        //[HttpGet]
        //[Route("GetAllUserMaster/NotApplicable")]
        //public List<AdminModel> GetAllUserMaster()
        //{
        //    List<AdminModel> allAdmins = new List<AdminModel>();
        //    string cs = config.GetConnectionString("InfinniumDB");
        //    using (SqlConnection con = new SqlConnection(cs))
        //    {
        //        con.Open();

        //        SqlCommand cmd = new SqlCommand("[dbo].[CRUD_UserMaster]", con);
        //        cmd.CommandType = System.Data.CommandType.StoredProcedure;

        //        cmd.Parameters.AddWithValue("@case", 1);
        //        SqlDataReader reader = cmd.ExecuteReader();
        //        while (reader.Read())
        //        {
        //            var adminModel = new AdminModel();

        //            adminModel.Email = reader["Email"].ToString();
        //            adminModel.Password = reader["Password"].ToString();

        //            allAdmins.Add(adminModel);
        //        }

        //        con.Close();
        //    }
        //    return allAdmins;
        //}

        // NOT TO BE USED : DEVELOPMENT PURPOSE
        // GET: AdminController/ConvertPassword
        //[HttpGet]
        //[Route("ConvertPassword")]
        //public void ConvertPassword()
        //{
        //    string cs = config.GetConnectionString("InfinniumDB");
        //    using(SqlConnection con = new SqlConnection(cs))
        //    {
        //        con.Open();
                
        //        SqlCommand cmd = new SqlCommand("SELECT Id, Password FROM UserMaster", con);

        //        List<(int Id, string EncryptedPassword)> encryptedList = new();

        //        SqlDataReader reader = cmd.ExecuteReader();
        //        while (reader.Read())
        //        {
        //            int UserId = Convert.ToInt32(reader["Id"]);
        //            string plainPassword = reader["Password"].ToString();

        //            string encryptedPassword = EncryptionHelper.Encrypt(plainPassword);

        //            encryptedList.Add((UserId, encryptedPassword));
        //        }

        //        reader.Close();

        //        foreach (var item in encryptedList)
        //        {
        //            SqlCommand updateCmd = new SqlCommand("UPDATE UserMaster SET Password = @Password WHERE Id = @Id", con);
        //            updateCmd.Parameters.AddWithValue("@Password", item.EncryptedPassword);
        //            updateCmd.Parameters.AddWithValue("@Id", item.Id);
        //            updateCmd.ExecuteNonQuery();
        //        }

        //        con.Close();
        //    }
        //    Console.WriteLine("Encryption complete!");
        //}
    }
}
