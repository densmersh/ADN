using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Drawing;
using System.Linq;
using System.Web;

namespace ADN.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public int Password { get; set; }
        public int Raiting { get; set; }
        public string Role { get; set; }
        public byte[] Avatar { get; set; }

        public List<News> UserNews { get; set; }
        public List<Comment> UserComments { get; set; } 
    }
}