using Microsoft.EntityFrameworkCore;
using StudentAPI.Data;

namespace StudentAPI.Model
{
    public class ApplicationDbContext :DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Student> Students { get; set; }
    }
}
    