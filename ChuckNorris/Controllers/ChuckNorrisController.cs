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
    }
}
