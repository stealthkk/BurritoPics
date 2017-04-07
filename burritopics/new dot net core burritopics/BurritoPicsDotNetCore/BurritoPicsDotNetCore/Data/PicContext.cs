using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using BurritoPicsDotNetCore.ViewModels;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace BurritoPicsDotNetCore.Models
{
    public class PicContext : IdentityDbContext<ApplicationUser>
    {
        public PicContext (DbContextOptions<PicContext> options)
            : base(options)
        {
        }

        public DbSet<BurritoPicsDotNetCore.Models.Pic> Pic { get; set; }
    }
}
