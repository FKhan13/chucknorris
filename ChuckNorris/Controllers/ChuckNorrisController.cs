using System;
using System.Collections.Generic;
using System.Linq;
using ChuckNorris.Data;
using Microsoft.AspNetCore.Mvc;

namespace ChuckNorris.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ChuckNorrisController : Controller
    {
        private readonly ChuckNorrisRepository _repo;

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="repo"></param>
        public ChuckNorrisController(ChuckNorrisRepository repo)
        {
            _repo = repo;
        }

        /// <summary>
        /// Get categories
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return _repo.GetCategories();
        }

        /// <summary>
        /// TODO: Remove later
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public JsonResult TestGetJoke()
        {
            List<string> cats = _repo.GetCategories().ToList();
            return Json(_repo.GetJoke(cats[new Random().Next(0, cats.Count)]));
        }
    }
}
