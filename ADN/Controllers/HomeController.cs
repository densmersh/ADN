using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using ADN.Controllers;
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

        [System.Web.Mvc.HttpGet]
        public JsonResult GetAllNews()
        {
            return Json(db.Newss, JsonRequestBehavior.AllowGet) ;
        }
        public void CreateNews(News news)
        {
            news.Date = DateTime.Now;
            db.Newss.Add(news);
            db.SaveChanges();
        }
        [System.Web.Mvc.HttpGet]
        public News GetCurrentNews(int id)
        {
            News news = db.Newss.Find(id);
            return news;
        }
        public void DeleteNews(string id)
        {
            try
            {
                db.Newss.Remove(db.Newss.Find(Convert.ToInt32(id)));
                db.SaveChanges();
            }
            catch (Exception)
            {
                
            }
            
        }

    }
}