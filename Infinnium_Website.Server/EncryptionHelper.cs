using System.Security.Cryptography;
using System.Text;
using Infinnium_Website.Server.Models.Config;
using Microsoft.Extensions.Options;

namespace Infinnium_Website.Server
{
    public class EncryptionHelper
    {
        private readonly string Key;
        private readonly string IV;

        public EncryptionHelper(IOptions<EncryptionSettings> options)
        {
            Key = options.Value.Key;
            IV = options.Value.IV;
        }

        public string Encrypt(string plainText)
        {
            if (string.IsNullOrEmpty(plainText))
            {
                return "Empty string!!";
            }
            else if(Encoding.UTF8.GetBytes(Key).Length != 16)
            {
                return "Invalid AES key size.";
            }
            else if(Encoding.UTF8.GetBytes(IV).Length != 16)
            {
                return "Invalid AES IV size.";
            }
            try
            {
                using (Aes aes = Aes.Create())
                {
                    aes.Key = Encoding.UTF8.GetBytes(Key);
                    aes.IV = Encoding.UTF8.GetBytes(IV);
                    ICryptoTransform encryptor = aes.CreateEncryptor(aes.Key, aes.IV);

                    using MemoryStream ms = new();
                    using CryptoStream cs = new(ms, encryptor, CryptoStreamMode.Write);
                    using (StreamWriter sw = new(cs))
                    {
                        sw.Write(plainText);
                    }

                    return Convert.ToBase64String(ms.ToArray());
                }
            }
            catch
            {
                // already encrypted
                return plainText;
            }

        }

        public string Decrypt(string cipherText)
        {
            if (string.IsNullOrEmpty(cipherText))
            {
                return "Empty string!!";
            }
            else if (Encoding.UTF8.GetBytes(Key).Length != 16)
            {
                return "Invalid AES key size.";
            }
            else if (Encoding.UTF8.GetBytes(IV).Length != 16)
            {
                return "Invalid AES IV size.";
            }
            try
            {
                using (Aes aes = Aes.Create())
                {
                    aes.Key = Encoding.UTF8.GetBytes(Key);
                    aes.IV = Encoding.UTF8.GetBytes(IV);
                    ICryptoTransform decryptor = aes.CreateDecryptor(aes.Key, aes.IV);

                    byte[] buffer = Convert.FromBase64String(cipherText);
                    using MemoryStream ms = new(buffer);
                    using CryptoStream cs = new(ms, decryptor, CryptoStreamMode.Read);
                    using StreamReader sr = new(cs);

                    return sr.ReadToEnd();
                }
            }
            catch
            {
                // already decrypted
                return cipherText;
            }
        }
    }
}
