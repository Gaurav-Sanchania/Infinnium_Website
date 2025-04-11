namespace Infinnium_Website.Server.Interfaces
{
    public interface IEmailSenderService
    {
        Task<bool> SendEmailAsync(string emailTo, string subject, string body);
    }
}
