using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace Virtuous1
{
    public class ContextVirtuous : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(string.Concat(@"Data Source=.; Initial Catalog=Virtuous;User Id=test; Password=test; Connection Timeout=120;"));
        }

        public DbSet<Donation> Donations { get; set; }
    }
}
