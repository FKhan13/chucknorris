using ChuckNorris.GraphQL.Queries;
using GraphQL;
using GraphQL.Types;

namespace ChuckNorris.GraphQL.Schemas
{
    public class JokeSchema : Schema
    {
        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="dependencyResolver"></param>
        public JokeSchema(IDependencyResolver dependencyResolver) : base(dependencyResolver)
        {
            Query = dependencyResolver.Resolve<JokeQuery>();
        }
    }
}
