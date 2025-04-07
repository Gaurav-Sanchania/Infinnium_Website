namespace Infinnium_Website.Server.Interfaces
{
    public interface IEmailSenderService
    {
        Task SendEmailAsync(string emailTo, string subject, string body);
    }
}
