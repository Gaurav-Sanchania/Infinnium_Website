using System.Collections.Concurrent;
using Infinnium_Website.Server.Interfaces;

namespace Infinnium_Website.Server
{
    public class JwtTokenBlacklistService : ITokenBlacklistService
    {
        private readonly ConcurrentDictionary<string, DateTime> blackList = new();

        public void BlacklistToken(string token, DateTime expiry) 
        {
            blackList[token] = expiry;
        }

        public bool IsTokenBlacklisted(string token) 
        {
            blackList.TryGetValue(token, out DateTime expiry);
            return expiry > DateTime.MinValue;
        }
    }
}
