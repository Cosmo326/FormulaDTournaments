using System;
using System.Collections.Generic;
using System.Linq;
using FormulaDTournaments.Data.Entity;
using FormulaDTournaments.Stores;
using Microsoft.AspNetCore.Mvc;

namespace FormulaDTournaments.Controllers
{
  [Route("api/[controller]/[action]")]
  public class TournamentController : ControllerBase
  {
    private readonly ITournamentStore _tournamentStore;
    private readonly IRaceStore _raceStore;
    
    public TournamentController(IStoreFactory storeFactory) : base(storeFactory)
    {
      _tournamentStore = _storeFactory.TournamentStore;
      _raceStore = _storeFactory.RaceStore;
    }
    
    [HttpGet]
    public JsonResult GetById(string id)
    {
      Tournament tournament = null;
      if (Guid.TryParse(id, out var dbid))
      {
        tournament = _tournamentStore.GetById(dbid);
      }

      if (tournament == null) return new JsonResult(null);
      var allRaces = _raceStore.GetByTournamentId(tournament.Id).ToList();
      
      var tournamentModel = new
      {
        id = tournament.Id,
        name = tournament.Name,
        raceCount = tournament.RaceCount,
        startDate = tournament.StartDate,
        races = allRaces.Select(r => new {id=r.Id, track=r.Track, laps=r.Laps, standings=string.Empty}),
        racers = new List<string>()
      };

      return new JsonResult(tournamentModel);
    }

    [HttpGet]
    public JsonResult Find(string term)
    {
      return new JsonResult(_tournamentStore.FindByPartialName(term).Select(t => new {id = t.Id, title = t.Name}));
    }

    [HttpGet]
    public JsonResult IsNameUnique(string name)
    {
      return new JsonResult(new { unique = _tournamentStore.FindByName(name) == null });
    }

    [HttpPost]
    public JsonResult SaveTournament(string name, int raceCount)
    {
      return new JsonResult(_tournamentStore.CreateTournament(name, raceCount));
    }

    [HttpGet]
    public JsonResult GetTournamentRacers(string id)
    { 
      return new JsonResult(null);
    }
  }
}