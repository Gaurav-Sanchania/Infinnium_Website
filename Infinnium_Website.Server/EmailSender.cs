using System.Net;
using System.Net.Mail;
using Infinnium_Website.Server.Interfaces;
using Infinnium_Website.Server.Models.Email;
using Microsoft.Extensions.Options;

namespace Infinnium_Website.Server
{
    public class EmailSender : IEmailSenderService
    {
        private readonly IConfiguration config;
        private readonly LoginConfig loginConfig;

        public EmailSender(IConfiguration configuration, IOptions<LoginConfig> options)
        {
            this.config = configuration;
            this.loginConfig = options.Value;
        }

        public void PrintCredentials()
        {
            Console.WriteLine("Email: " + loginConfig.Username);
            Console.WriteLine("Password: " + loginConfig.Password);
        }

        public Task SendEmailAsync(string emailTo, string subject, string body)
        {
            var mail = loginConfig.Username;
            Console.WriteLine(mail);

            var pwd = loginConfig.Password;
            Console.WriteLine(pwd);

            var client = new SmtpClient("smtp.gmail.com", 587)
            {
                EnableSsl = true,
                Credentials = new NetworkCredential(mail, pwd)
            };

            return client.SendMailAsync(new MailMessage
            {
                From = new MailAddress(mail),
                To = { emailTo },
                Subject = subject,
                Body = body
            });
        }
    }
}
