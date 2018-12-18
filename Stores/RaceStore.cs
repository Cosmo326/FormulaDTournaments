using System;
using System.Collections.Generic;
using System.Linq;
using FormulaDTournaments.Data;
using FormulaDTournaments.Data.Entity;
using FormulaDTournaments.Data.Extensions;
using Microsoft.EntityFrameworkCore;

namespace FormulaDTournaments.Stores
{
  public interface IRaceStore
  {
    Race GetById(Guid id);
    Race CreateRace(Guid tournamentId, string name, int raceCount);
    IEnumerable<Race> GetByTournamentId(Guid tournamentId);
    RaceStanding AddRaceStanding(RaceStanding raceStanding);
  }
  
  public class RaceStore: StoreBase, IRaceStore
  {
    public RaceStore(DbContextOptions options) : base(options)
    {
    }

    public Race GetById(Guid id)
    {
      using (var ctx = new FormulaDContext(_options))
      {
        return ctx.Set<Race>().SingleOrDefault(r => r.Id.Equals(id));
      }
    }

    public Race CreateRace(Guid tournamentId, string track, int laps)
    {
      using (var ctx = new FormulaDContext(_options))
      {
        var race = new Race
        {
          Id = Guid.NewGuid(),
          TournamentId = tournamentId,
          Track = track,
          Laps = laps,
          RaceDate = DateTime.Now
        };

        ctx.Set<Race>().Add(race);
        ctx.SaveChanges();

        return race;
      }
    }

    public IEnumerable<Race> GetByTournamentId(Guid tournamentId)
    {
      using (var ctx = new FormulaDContext(_options))
      {
        return ctx.Set<Race>().GetRacesByTournmentId(tournamentId)?.ToList();
      }
    }

    public RaceStanding AddRaceStanding(RaceStanding raceStanding)
    {
       using(var ctx = new FormulaDContext(_options)){
         ctx.Set<RaceStanding>().Add(raceStanding);
         ctx.SaveChanges();
         return raceStanding;
       }
    }
  }
}