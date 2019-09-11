using System.ComponentModel.DataAnnotations;

namespace Dating.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set;}

        [Required]
        [StringLength(10, MinimumLength=6, ErrorMessage = "You must atleast 6 characters")]
        public string Password { get; set;}
    }
}