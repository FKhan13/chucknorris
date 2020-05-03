using System.Collections.Generic;
using ChuckNorris.Models;

namespace ChuckNorris.Data
{
    public class ChuckNorrisRepository
    {
        private readonly ChuckNorrisApi _api;

        public ChuckNorrisRepository(ChuckNorrisApi api)
        {
            _api = api;
        }

        public Joke GetJoke(string category)
        {
            return _api.GetJoke(category);
        }

        public IEnumerable<string> GetCategories()
        {
            return _api.GetCategories();
        }
    }
}
