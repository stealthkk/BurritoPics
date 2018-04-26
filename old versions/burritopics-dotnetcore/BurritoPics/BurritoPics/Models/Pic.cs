using System;
using BurritoPics.Misc;

namespace BurritoPics.Models
{
    public class Pic
    {
        public Pic()
        {
        }

        public int Id { get; set; }
        public string FileName { get; set; }
        public DateTime DateSubmitted { get; set; }
        public DateTime DateApproved { get; set; }
        public bool Approved { get; set; }
        public string Name { get; set; }
        public PicType Type { get; set; }
    }
}
