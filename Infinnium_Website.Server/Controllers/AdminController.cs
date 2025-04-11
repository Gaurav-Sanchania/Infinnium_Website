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

        // NOT TO BE USED
        // GET: AdminController/GetAllUserMaster
        [HttpGet]
        [Route("GetAllUserMaster/NotApplicable")]
        public List<AdminModel> GetAllUserMaster()
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

                    adminModel.Email = reader["Email"].ToString();
                    adminModel.Password = reader["Password"].ToString();

                    allAdmins.Add(adminModel);
                }

                con.Close();
            }
            return allAdmins;
        }

        // POST: AdminController/CheckUser/
        [HttpPost]
        [Route("CheckUser")]
        public bool CheckUser([FromBody] AdminModel adminModel)
        {
            var isUserValid = false;
            string cs = config.GetConnectionString("InfinniumDB");
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();

                SqlCommand cmd = new SqlCommand("[dbo].[CRUD_UserMaster]", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@case", 6);
                cmd.Parameters.AddWithValue("@Email", adminModel.Email);
                cmd.Parameters.AddWithValue("@Password", adminModel.Password);

                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    adminModel.Status = reader["Status"].ToString();
                    var status = adminModel.Status;
                    if(status == "Success")
                    {
                        isUserValid = true;
                    } else
                    {
                        isUserValid = false;
                    }
                }

                con.Close();
            }
            return isUserValid;
        }
    }
}
