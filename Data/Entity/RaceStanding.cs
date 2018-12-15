using System;

namespace FormulaDTournaments.Data.Entity
{
  public class RaceStanding
  {
    public Race Race { get; set; }
    public Guid RaceId { get; set; }
    public Racer Racer { get; set; }
    public Guid RacerId { get; set; }
    public int Place { get; set; }
    public int Points { get; set; }
    public int Tire { get; set; }
    public int Brakes { get; set; }
    public int Transmission { get; set; }
    public int Body { get; set; }
    public int Engine { get; set; }
    public int Handling { get; set; }

  }
}