using System;
using System.Collections.Generic;
using System.Linq;
using FormulaDTournaments.Data;
using FormulaDTournaments.Data.Entity;
using FormulaDTournaments.Data.Extensions;
using Microsoft.EntityFrameworkCore;

namespace FormulaDTournaments.Stores
{
  public interface ITournamentStore
  {
    Tournament GetById(Guid id);
    Tournament FindByName(string name);
    IEnumerable<Tournament> FindByPartialName(string partialName);
    Tournament CreateTournament(string name, int raceCount);
    IEnumerable<TournamentStanding> GetTournamentStandingsById(Guid id);
  }
  
  public class TournamentStore : StoreBase, ITournamentStore
  {
    public TournamentStore(DbContextOptions options) : base(options)
    {
    }

    public Tournament GetById(Guid id)
    {
      using (var ctx = new FormulaDContext(_options))
      {
        return ctx.Set<Tournament>()
          .SingleOrDefault(t => t.Id.Equals(id));
      }
    }

    public Tournament FindByName(string name)
    {
      using (var ctx = new FormulaDContext(_options))
      {
        return ctx.Set<Tournament>()
          .SingleOrDefault(t => t.Name.Equals(name));
      }
    }

    public IEnumerable<Tournament> FindByPartialName(string partialName)
    {
      using (var ctx = new FormulaDContext(_options))
      {
        return ctx.Set<Tournament>().ByPartialName(partialName).ToList();
      }
    }

    public Tournament CreateTournament(string name, int raceCount)
    {
      var tournament = new Tournament
      {
        Id = Guid.NewGuid(),
        Name = name,
        RaceCount = raceCount,
        StartDate = DateTime.Now
      };

      using (var ctx = new FormulaDContext(_options))
      {
        ctx.Set<Tournament>().Add(tournament);
        ctx.SaveChanges();
      }

      return tournament;
    }

    public IEnumerable<TournamentStanding> GetTournamentStandingsById(Guid id)
    {
      using (var ctx = new FormulaDContext(_options))
      {
        return ctx.Set<TournamentStanding>().Where(ts => ts.TournamentId.Equals(id)).ToList();
      }
    }
  }
}