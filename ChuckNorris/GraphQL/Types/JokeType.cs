using ChuckNorris.Models;
using GraphQL.Types;

namespace ChuckNorris.GraphQL.Types
{
    public class JokeType : ObjectGraphType<Joke>
    {
        public JokeType()
        {
            Field(i => i.Categories);
            Field(i => i.CreatedAt);
            Field(i => i.IconUrl);
            Field(i => i.Id);
            Field(i => i.UpdatedAt);
            Field(i => i.Url);
            Field(i => i.Value);
        }
    }
}
