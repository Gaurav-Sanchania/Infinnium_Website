using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Infinnium_Website.Server.Models.Config;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace Infinnium_Website.Server.Controllers
{
    [ApiController]
    [Route("api/AuthController")]
    public class AuthController : Controller
    {
        private readonly JwtSettings _jwtSettings;
        private readonly EncryptionHelper en;
        public AuthController(JwtSettings jwtSettings, EncryptionHelper en)
        {
            _jwtSettings = jwtSettings;
            this.en = en;
        }

        // POST: AuthController/GenerateToken
        [HttpPost]
        [Route("GenerateToken")]
        public string GenerateToken()
        {
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, "testUser"),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(en.Decrypt(_jwtSettings.SecretKey)));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: en.Decrypt(_jwtSettings.Issuer),
                audience: en.Decrypt(_jwtSettings.Audience),
                claims: claims,
                expires: DateTime.Now.AddMinutes(_jwtSettings.ExpiryMinutes),
                signingCredentials: creds
            );

            return (new JwtSecurityTokenHandler().WriteToken(token));
        }
    }
}
