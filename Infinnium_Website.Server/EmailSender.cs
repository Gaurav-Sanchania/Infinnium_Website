using System.Net;
using System.Net.Mail;
using Infinnium_Website.Server.Interfaces;
using Infinnium_Website.Server.Models.Config;
using Microsoft.Extensions.Options;

namespace Infinnium_Website.Server
{
    public class EmailSender : IEmailSenderService
    {
        private readonly LoginConfig loginConfig;
        private readonly EncryptionHelper en;

        public EmailSender(IOptions<LoginConfig> options, EncryptionHelper encryptionHelper)
        {
            this.loginConfig = options.Value;
            this.en = encryptionHelper;
        }

        public void PrintCredentials()
        {
            Console.WriteLine("Email: " + en.Decrypt(loginConfig.Username));
            Console.WriteLine("Password: " + en.Decrypt(loginConfig.Password));
        }

        public async Task<bool> SendEmailAsync(string emailTo, string subject, string body)
        {
            bool isEmailSend = false;
            try
            {
                var mail = en.Decrypt(loginConfig.Username);
                if (string.IsNullOrEmpty(mail))
                {
                    throw new ArgumentNullException(nameof(mail), "Email address cannot be null or empty.");
                }
                Console.WriteLine(mail);

                var pwd = en.Decrypt(loginConfig.Password);
                if (string.IsNullOrEmpty(pwd))
                {
                    throw new ArgumentNullException(nameof(pwd), "Password cannot be null or empty.");
                }
                Console.WriteLine(pwd);

                var client = new SmtpClient("mail.infinniumtech.com", 587)
                {
                    EnableSsl = true,
                    Credentials = new NetworkCredential(mail, pwd),
                    UseDefaultCredentials = false,
                    DeliveryMethod = SmtpDeliveryMethod.Network
                };

                await client.SendMailAsync(new MailMessage
                {
                    From = new MailAddress(mail),
                    To = { emailTo },
                    Subject = subject,
                    Body = body,
                    IsBodyHtml = true
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
