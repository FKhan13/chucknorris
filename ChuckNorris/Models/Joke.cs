using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace ChuckNorris.Models
{
    public class Joke
    {
        [JsonProperty("categories")]
        public List<string> Categories { get; set; }
        [JsonProperty("created_at")]
        public DateTime CreatedAt { get; set; }
        [JsonProperty("icon_url")]
        public string IconUrl { get; set; }
        [JsonProperty("id")]
        public string Id { get; set; }
        [JsonProperty("updated_at")]
        public DateTime UpdatedAt { get; set; }
        [JsonProperty("url")]
        public string Url { get; set; }
        [JsonProperty("value")]
        public string Value { get; set; }
    }
}
