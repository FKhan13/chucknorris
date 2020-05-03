using System.Collections.Generic;
using System.Net;
using ChuckNorris.Models;
using Microsoft.Extensions.Configuration;
using RestSharp;

namespace ChuckNorris.Data
{
    public class ChuckNorrisApi
    {
        private readonly RestClient _client;

        public ChuckNorrisApi(IConfiguration configuration)
        {
            _client = new RestClient(configuration["ChuckNorrisEndPoint"]);
        }

        public List<string> GetCategories()
        {
            RestRequest request = new RestRequest("categories", Method.GET);

            IRestResponse<List<string>> response = _client.Execute<List<string>>(request);

            return response.StatusCode == HttpStatusCode.OK ? response.Data : new List<string>();
        }

        public Joke GetJoke(string category)
        {
            RestRequest request = new RestRequest("random", Method.GET);
            request.AddHeader("accept", "application/json");
            request.AddParameter("category", category.ToLower());
            request.OnBeforeDeserialization = resp => { resp.ContentType = "application/json"; };
            request.RequestFormat = DataFormat.Json;

            IRestResponse<Joke> response = _client.Execute<Joke>(request);

            return response.StatusCode == HttpStatusCode.OK ? response.Data : new Joke();
        }
    }
}
