using System;
using System.Linq;
using FormulaDTournaments.Data;
using FormulaDTournaments.Data.Entity;
using Microsoft.EntityFrameworkCore;

namespace FormulaDTournaments.Stores
{
  public interface IRacerStore
  {
    Racer GetByName(string name);
    void SaveRacer(Racer racer);
  }
  
  public class RacerStore: StoreBase, IRacerStore
  {
    public RacerStore(DbContextOptions options) : base(options)
    {
    }

    public Racer GetByName(string name)
    {
      using (var ctx = new FormulaDContext(_options))
      {
        return ctx.Set<Racer>().SingleOrDefault(r => r.Username.Equals(name, StringComparison.OrdinalIgnoreCase));
      }
    }

    public void SaveRacer(Racer racer)
    {
      using (var ctx = new FormulaDContext(_options))
      {
        
      }
    }
  }
}