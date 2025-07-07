using Infinnium_Website.Server.Models.Config;

namespace Infinnium_Website.Server
{
    public class ConnectionStringService
    {
        private readonly DatabaseSettings db;
        private readonly EncryptionHelper en;

        public ConnectionStringService(DatabaseSettings dbSettings, EncryptionHelper encryptionHelper)
        {
            this.db = dbSettings;
            this.en = encryptionHelper;
        }

        public string GenerateConnection()
        {
            return $"Server={en.Decrypt(db.Server)};Database={en.Decrypt(db.Database)};User Id={en.Decrypt(db.UserId)};Password={en.Decrypt(db.Password)};TrustServerCertificate=Yes;";
        }
    }
}
