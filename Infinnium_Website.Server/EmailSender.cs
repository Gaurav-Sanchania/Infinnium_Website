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

        public async Task<bool> SendEmailAsync(string emailTo, string subject, string body)
        {
            bool isEmailSend = false;
            try
            {
                var mail = loginConfig.Username;
                if (string.IsNullOrEmpty(mail))
                {
                    throw new ArgumentNullException(nameof(mail), "Email address cannot be null or empty.");
                }
                Console.WriteLine(mail);

                var pwd = loginConfig.Password;
                if (string.IsNullOrEmpty(pwd))
                {
                    throw new ArgumentNullException(nameof(pwd), "Password cannot be null or empty.");
                }
                Console.WriteLine(pwd);

                var client = new SmtpClient("mail.infinniumtech.com", 587)
                {
                    EnableSsl = false,
                    Credentials = new NetworkCredential(mail, pwd),
                    UseDefaultCredentials = false,
                    DeliveryMethod = SmtpDeliveryMethod.Network
                };

                await client.SendMailAsync(new MailMessage
                {
                    From = new MailAddress(mail),
                    To = { emailTo },
                    Subject = subject,
                    Body = body
                });

                isEmailSend = true;
            }
            catch (Exception)
            {
                throw;
            }
            return isEmailSend;
        }
    }
}
