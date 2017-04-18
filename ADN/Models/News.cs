using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ADN.Models
{
    public class News
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public int Raiting { get; set; }
        public string Author { get; set; }
        public string Text { get; set; }
        public DateTime Date { get; set; }
        public string KindOfNews { get; set; }
        public string[] Tags { get; set; }

        public User User { get; set; }
        public List<Comment> Comments { get; set; } 
    }
}