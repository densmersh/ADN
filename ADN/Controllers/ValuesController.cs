using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Helpers;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.UI;
using ADN.Models;

namespace ADN.Controllers
{
    [EnableCors(origins: "http://localhost:5188", headers: "*", methods: "*")]
    public class ValuesController : ApiController
    {
        NewsContext db = new NewsContext();
        // GET api/<controller>
        public IEnumerable<News> Get()
        {
            return db.Newss;
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]News news)
        {
            news.Date = DateTime.Now;
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}