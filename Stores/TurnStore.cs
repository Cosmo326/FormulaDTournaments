using System;
using System.Linq;
using FormulaDTournaments.Data;
using FormulaDTournaments.Data.Entity;
using Microsoft.EntityFrameworkCore;

namespace FormulaDTournaments.Stores
{
  public interface ITurnStore
  {
  }

  public class TurnStore : StoreBase, ITurnStore
  {
    public TurnStore(DbContextOptions options) : base(options)
    {
    }
  }
}