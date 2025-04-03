namespace Infinnium_Website.Server.Models.Blogs
{
    public class BlogsModel
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public string? Brief { get; set; }
        public string? PublishedDate { get; set; }
        public string? Image { get; set; }
        public string? ImageName { get; set; }
        public int AuthorId { get; set; }
        public string? AuthorName { get; set; }
        public string? AuthorDepartment { get; set; }
        public string? AuthorEmail { get; set; }
    }
}
