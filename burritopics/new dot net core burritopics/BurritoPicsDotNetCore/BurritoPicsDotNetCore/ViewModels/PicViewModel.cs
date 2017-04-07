using Microsoft.AspNetCore.Http;
using System;
using System.ComponentModel.DataAnnotations;

namespace BurritoPicsDotNetCore.ViewModels
{
    public class PicViewModel
    {
        public int Id { get; set; }
        public string FileName { get; set; }
        public DateTime DateSubmitted { get; set; }
        public DateTime DateApproved { get; set; }
        public bool Approved { get; set; }
        public string Name { get; set; }
        public PicType Type { get; set; }
        public IFormFile Image { get; set; }
    }
}
