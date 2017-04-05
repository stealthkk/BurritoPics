using System;

namespace BurritoPicsDotNetCore.ViewModels
{
    public class BlogEntry
    {
        public string Title { get; set; }
        public string Content { get; set; }
        public DateTime PublishDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        public bool Active { get; set; }

    }
}
