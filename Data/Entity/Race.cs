using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace FormulaDTournaments.Data.Entity
{
  public class Race
  {
    public Guid Id { get; set; }
    public Guid TournamentId { get; set; }
    public Tournament Tournament { get; set; }
    public string Track { get; set; }
    public DateTime RaceDate { get; set; }
    public DateTime? EndDate { get; set; }
    public int Laps { get; set; }
    
    public virtual IEnumerable<Turn> Turns { get; set; }
    public virtual IEnumerable<RaceStanding> RaceStandings { get; set; }
  }
}