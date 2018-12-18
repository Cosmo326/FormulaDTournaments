using System;

namespace FormulaDTournaments.Models
{
  public class RacerModel
  {
    public string RaceId { get; set; }
    public string Name { get; set; }
    public int Tire { get; set; }
    public int Brakes { get; set; }
    public int Transmission { get; set; }
    public int Body { get; set; }
    public int Engine { get; set; }
    public int Handling { get; set; }
  }
}