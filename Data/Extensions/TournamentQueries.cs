using System.Linq;
using FormulaDTournaments.Data.Entity;

namespace FormulaDTournaments.Data.Extensions
{
  public static class TournamentQueries
  {
    public static IQueryable<Tournament> ByPartialName(this IQueryable<Tournament> query, string term)
    {
      return query.Where(q => q.Name.Contains(term));
    }
  }
}