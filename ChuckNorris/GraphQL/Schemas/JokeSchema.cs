using ChuckNorris.GraphQL.Queries;
using GraphQL;
using GraphQL.Types;

namespace ChuckNorris.GraphQL.Schemas
{
    public class JokeSchema : Schema
    {
        public JokeSchema(IDependencyResolver dependencyResolver) : base(dependencyResolver)
        {
            Query = dependencyResolver.Resolve<JokeQuery>();
        }
    }
}
