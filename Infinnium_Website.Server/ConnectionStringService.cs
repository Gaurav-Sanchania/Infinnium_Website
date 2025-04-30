using Infinnium_Website.Server.Models.Config;

namespace Infinnium_Website.Server
{
    public class ConnectionStringService
    {
        private readonly DatabaseSettings db;

        public ConnectionStringService(DatabaseSettings dbSettings)
        {
            db = dbSettings;
        }

        public string GenerateConnection()
        {
            return $"Server={db.Server};Database={db.Database};User Id={db.UserId};Password={db.Password};TrustServerCertificate=Yes;";
        }
    }
}
