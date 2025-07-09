using System.Runtime.InteropServices;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace Infinnium_Website.Server.Controllers
{
    [ApiController]
    [Route("api/ConnectionTest")]
    public class ConnectionTestController : Controller
    {
        private readonly ConnectionStringService config;

        public ConnectionTestController(ConnectionStringService config)
        {
            this.config = config;
        }

        // GET: ConnectionTest/apiDbTest
        [HttpGet]
        [Route("apiDbTest")]
        public IActionResult apiDbTest()
        {
            try
            {
                string cs = config.GenerateConnection();
                using (SqlConnection conn = new SqlConnection(cs))
                {
                    conn.Open();
                }
                var response = new
                {
                    apiStatus = "Connected",
                    dbStatus = "Connected",
                    message = "Connection successful"
                };
                return Ok(response);
            }
            catch (Exception ex)
            {
                var response = new
                {
                    apiStatus = "Connected",
                    dbStatus = "Failed",
                    message = ex.ToString()
                };
                return BadRequest(response);
            }
        }
    }
}
