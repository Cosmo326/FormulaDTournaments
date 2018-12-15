using System;

namespace FormulaDTournaments.Data.Entity
{
  public class TournamentStanding
  {
    public Tournament Tournament { get; set; }
    public Guid TournamentId { get; set; }
    public Racer Racer { get; set; }
    public Guid RacerId { get; set; }
    public int Place { get; set; }
    public int Points { get; set; }
  }
}