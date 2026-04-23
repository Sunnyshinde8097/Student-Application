using System.ComponentModel.DataAnnotations.Schema;

namespace StudentAPI.Data
{
    [Table("studentMaster")]
    public class Student
    {
        public int StudentID { get; set; }
        public string studentName { get; set; } =string.Empty;
        public string MobileNo { get; set; } = string.Empty;
        public string email { get; set; } = string.Empty;
        public string city { get; set; } = string.Empty;
        public string states {  get; set; } = string.Empty;
        public string pincode { get; set; } = string.Empty;
        public string Address1 { get; set; } = string.Empty;    
        public string Address2 { get; set; } = string.Empty;

    }
}
