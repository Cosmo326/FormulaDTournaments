using Microsoft.EntityFrameworkCore;

namespace FormulaDTournaments.Stores
{
  public interface IStoreFactory
  {
    ITournamentStore TournamentStore { get; }
    IRaceStore RaceStore { get; }
    IRacerStore RacerStore { get; }
  }
  
  public class StoreFactory: IStoreFactory
  {
    private readonly DbContextOptions _options;

    public StoreFactory(DbContextOptions options)
    {
      _options = options;
    }

    public ITournamentStore TournamentStore => new TournamentStore(_options);
    public IRaceStore RaceStore => new RaceStore(_options);
    public IRacerStore RacerStore => new RacerStore(_options);
  }
}