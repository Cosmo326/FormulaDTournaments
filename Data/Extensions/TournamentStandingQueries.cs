using System;
using System.Linq;
using FormulaDTournaments.Data.Entity;

namespace FormulaDTournaments.Data.Extensions
{
  public static class TournamentStandingQueries
  {
    public static IQueryable<TournamentStanding> GetByTournamentId(this IQueryable<TournamentStanding> query, Guid tournamentId)
    {
      return query.Where(q => q.TournamentId.Equals(tournamentId));
    }

    public static IQueryable<Racer> GetRacers(this IQueryable<TournamentStanding> query)
    {
      return query.Select(ts => ts.Racer);
    }
  }
}