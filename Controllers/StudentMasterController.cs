using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StudentAPI.Data;
using StudentAPI.Model;
using System.Diagnostics.Contracts;

namespace StudentAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentMasterController : ControllerBase
    {
        public readonly ApplicationDbContext _context;

        public StudentMasterController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetStudent()
        {
            var student = _context.Students.ToList();
            return Ok(student);
        }

        [HttpPost]
        public IActionResult SaveStudent(Student student)
        {
            _context.Students.Add(student);
            _context.SaveChanges();
            return Ok(student);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateStudent(int id, Student student)
        {
            var existingStudent = _context.Students.Find(id);
            if (existingStudent == null)
            {
                var notFoundResponse = new
                {
                    Status = "Error",
                    Message = "Student record not found"
                };
                return NotFound(notFoundResponse);
            }
            existingStudent.studentName = student.studentName;
            existingStudent.MobileNo = student.MobileNo;
            existingStudent.email = student.email;
            existingStudent.city = student.city;
            existingStudent.states = student.states;
            existingStudent.Address1 = student.Address1;
            existingStudent.Address2 = student.Address2;
            _context.Students.Update(existingStudent);
            _context.SaveChanges();

            return Ok(existingStudent);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteStudent(int id)
        {
            var existingStudent = _context.Students.Find(id);
            if (existingStudent == null)
            {
                var notFoundResponse = new
                {
                    Status = "Error",
                    Message = "Student record not found"
                };
                return NotFound(notFoundResponse);
            }

            _context.Students.Remove(existingStudent);
            _context.SaveChanges();

            var successResponse = new
            {
                Status = "Success",
                Message = "Student record deleted successfully"
            };
            return Ok(successResponse);
        }

    }
}
