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
    Racer CreateRacer(string name);
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

    public Racer CreateRacer(string name)
    {
      using (var ctx = new FormulaDContext(_options))
      {
        var racer = new Racer { Id = Guid.NewGuid(), Username = name };
        ctx.Set<Racer>().Add(racer);

        ctx.SaveChanges();
        return racer;
      }
    }
  }
}