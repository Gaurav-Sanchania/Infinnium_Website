using Infinnium_Website.Server.Models.Admin;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace Infinnium_Website.Server.Controllers
{
    [ApiController]
    [Route("AdminController")]
    public class AdminController(IConfiguration configuration) : Controller
    {
        private readonly IConfiguration config = configuration;

        // GET: AdminController/GetAllUserMaster
        [HttpGet]
        [Route("GetAllUserMaster")]
        public List<AdminModel> GetAllUserMaster ()
        {
            List<AdminModel> allAdmins = new List<AdminModel>();
            string cs = config.GetConnectionString("InfinniumDB");
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

                SqlCommand cmd = new SqlCommand("[dbo].[CRUD_UserMaster]", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@case", 1);
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    var adminModel = new AdminModel();

                    adminModel.Id = Convert.ToInt32(reader["Id"]);
                    adminModel.UserName = reader["UserName"].ToString();
                    adminModel.Email = reader["Email"].ToString();
                    adminModel.Password = reader["Password"].ToString();
                    adminModel.AuthorId = Convert.ToInt32(reader["AuthorId"]);

                    allAdmins.Add(adminModel);
                }

                con.Close();
            }
            return allAdmins;
        }
    }
}
