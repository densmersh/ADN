using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ADN.Models;

namespace BookStore.Controllers
{
    public class HomeController : Controller
    {
        // создаем контекст данных
        NewsContext db = new NewsContext();

        public ActionResult Index()
        {
            // получаем из бд все объекты News
            IEnumerable<News> news = db.Newss;
            // передаем все объекты в динамическое свойство Newss в ViewBag
            ViewBag.Newss = news;
            // возвращаем представление
            return View();
        }



    }
}