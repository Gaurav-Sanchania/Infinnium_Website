﻿namespace Infinnium_Website.Server.Models.Authors
{
    public class AuthorModel
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public string? Email { get; set; }
        public string? Designation { get; set; }
        public string? Guid { get; set; }
        public byte[]? Image { get; set; }
        public string? ImageName { get; set; }
        public string? SocialMediaLink { get; set; }
    }
}
