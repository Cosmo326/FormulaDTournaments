using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace FormulaDTournaments.Data.Entity
{
  public class Tournament
  {
    public Guid Id { get; set; }
    public string Name { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime? CompleteDate { get; set; }
    public int RaceCount { get; set; }

    public virtual IEnumerable<Race> Races { get; set; }
    public virtual IEnumerable<TournamentStanding> TournamentStandings { get; set; }
  }
}