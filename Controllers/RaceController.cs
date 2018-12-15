using System;
using FormulaDTournaments.Data.Entity;
using FormulaDTournaments.Stores;
using Microsoft.AspNetCore.Mvc;

namespace FormulaDTournaments.Controllers
{
  [Route("api/[controller]/[action]")]
  public class RaceController : ControllerBase
  {
    private readonly IRaceStore _raceStore;

    public RaceController(IStoreFactory storeFactory) : base(storeFactory)
    {
      _raceStore = _storeFactory.RaceStore;
    }

    [HttpGet]
    public JsonResult GetById(string id)
    {
      Race race = null;
      if (Guid.TryParse(id, out var dbid))
      {
        race = _raceStore.GetById(dbid);
      }

      return new JsonResult(race);
    }

    [HttpPost]
    public JsonResult SaveRace(string tournamentId, string track, int laps)
    {
      Race race = null;
      if (Guid.TryParse(tournamentId, out var tournyId))
      {
        race = _raceStore.CreateRace(tournyId, track, laps);
      }
      
      return new JsonResult(race);
    }
  }
}