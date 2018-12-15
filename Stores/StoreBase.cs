using Microsoft.EntityFrameworkCore;

namespace FormulaDTournaments.Stores
{
  public class StoreBase
  {
    protected readonly DbContextOptions _options;

    protected StoreBase(DbContextOptions options)
    {
      _options = options;
    }
  }
}