using System;

namespace FormulaDTournaments.Data.Entity
{
  public class Turn
  {
    public Guid Id { get; set; }
    public int TurnNumber { get; set; }
    public Guid RaceId { get; set; }
    public Race Race { get; set; }
    public Guid RacerId { get; set; }
    public Racer Racer { get; set; }
    public int Lap { get; set; }
    public int Speed { get; set; }
    public int Gear { get; set; }
    public int EndPosition { get; set; }
    public int Tire { get; set; }
    public int Brakes { get; set; }
    public int Transmission { get; set; }
    public int Body { get; set; }
    public int Engine { get; set; }
    public int Handling { get; set; }
  }
}