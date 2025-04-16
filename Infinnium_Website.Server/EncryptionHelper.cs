using System.Security.Cryptography;
using System.Text;

namespace Infinnium_Website.Server
{
    public class EncryptionHelper
    {
        private static readonly string Key = "MySecretKey12345";
        private static readonly string IV = "InitVectorABC123";  

        public static string Encrypt(string plainText)
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

            public static string Decrypt(string cipherText)
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
    }
}
