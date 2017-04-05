using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BurritoPicsDotNetCore.ViewModels
{
    public class Pic
    {
        public string FileName { get; set; }
        public DateTime DateSubmitted { get; set; }
        public DateTime DateApproved { get; set; }
        public bool Approved { get; set; }

    }
}
