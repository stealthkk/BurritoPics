using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using BurritoPicsDotNetCore.ViewModels;

namespace BurritoPicsDotNetCore.Models
{
    public class PicContext : DbContext
    {
        public PicContext (DbContextOptions<PicContext> options)
            : base(options)
        {
        }

        public DbSet<BurritoPicsDotNetCore.ViewModels.Pic> Pic { get; set; }
    }
}
