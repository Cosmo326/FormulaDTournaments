using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using Microsoft.AspNetCore.Identity;

namespace FormulaDTournaments.Data.Entity
{
  public class Racer
  {
    public Guid Id { get; set; }
    public string Username { get; set; }

    public virtual IEnumerable<Turn> Turns { get; set; }
    public virtual IEnumerable<RaceStanding> RaceStandings { get; set; }
    public virtual IEnumerable<TournamentStanding> TournamentStandings { get; set; }
  }
}