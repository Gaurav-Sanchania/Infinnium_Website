namespace Infinnium_Website.Server.Interfaces
{
    public interface ITokenBlacklistService
    {
        void BlacklistToken(string token, DateTime expiry);
        bool IsTokenBlacklisted(string token);
    }
}
