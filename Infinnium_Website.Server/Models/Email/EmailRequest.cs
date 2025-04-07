namespace Infinnium_Website.Server.Models.Email
{
    public class EmailRequest
    {
        public string Receiver { get; set; }
        public string Subject { get; set; }
        public string Body { get; set; }
    }
}
