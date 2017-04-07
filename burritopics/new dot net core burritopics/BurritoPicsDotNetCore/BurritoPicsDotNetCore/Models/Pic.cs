using BurritoPicsDotNetCore.ViewModels;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BurritoPicsDotNetCore.Models
{
    public class Pic
    {
        [Key]
        public int Id { get; set; }
        public string FileName { get; set; }
        public DateTime DateSubmitted { get; set; }
        public DateTime DateApproved { get; set; }
        public bool Approved { get; set; }
        public string Name { get; set; }
        public PicType Type { get; set; }
        public byte[] Image { get; set; }
    }
}
