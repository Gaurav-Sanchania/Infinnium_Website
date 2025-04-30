namespace Infinnium_Website.Server.Models.Config
{
    public class CorsSettings
    {
        public string[] AllowedOrigins { get; set; } = [];
        public string[] AllowedMethods { get; set; } = [];
        public string[] AllowedHeaders { get; set; } = [];
    }
}
