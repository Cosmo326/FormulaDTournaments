using System;
using System.Linq;
using FormulaDTournaments.Data.Entity;

namespace FormulaDTournaments.Data.Extensions
{
  public static class RaceQueries
  {
    public static IQueryable<Race> GetRacesByTournmentId(this IQueryable<Race> query, Guid tournamentId)
    {
      return query.Where(q => q.TournamentId.Equals(tournamentId));
    }
  }
}