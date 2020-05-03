using System.Collections.Generic;
using ChuckNorris.Data;
using ChuckNorris.GraphQL.Types;
using ChuckNorris.Models;
using GraphQL.Types;

namespace ChuckNorris.GraphQL.Queries
{
    public class JokeQuery : ObjectGraphType
    {
        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="repository"></param>
        public JokeQuery(ChuckNorrisRepository repository)
        {
            Field<JokeType>("joke",
                arguments: new QueryArguments(new List<QueryArgument>
                {
                    new QueryArgument<StringGraphType>
                    {
                        Name = "Category"
                    }
                }),
                resolve: context =>
                {
                    string cat = context.GetArgument<string>("category");

                    return !string.IsNullOrWhiteSpace(cat) ? repository.GetJoke(cat) : new Joke();
                });
        }
    }
}
