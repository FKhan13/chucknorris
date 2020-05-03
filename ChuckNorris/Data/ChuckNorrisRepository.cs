using System.Collections.Generic;
using ChuckNorris.Models;

namespace ChuckNorris.Data
{
    public class ChuckNorrisRepository
    {
        private readonly ChuckNorrisApi _api;

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="api"></param>
        public ChuckNorrisRepository(ChuckNorrisApi api)
        {
            _api = api;
        }

        /// <summary>
        /// Get Joke
        /// </summary>
        /// <param name="category"></param>
        /// <returns></returns>
        public Joke GetJoke(string category)
        {
            return _api.GetJoke(category);
        }

        /// <summary>
        /// Get Categories
        /// </summary>
        /// <returns></returns>
        public IEnumerable<string> GetCategories()
        {
            return _api.GetCategories();
        }
    }
}
