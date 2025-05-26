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
            return $"Server=localhost; Database=Infinnium; Trusted_Connection=True; TrustServerCertificate=Yes;";
        }
    }
}
