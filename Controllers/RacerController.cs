using System;
using FormulaDTournaments.Data.Entity;
using FormulaDTournaments.Models;
using FormulaDTournaments.Stores;
using Microsoft.AspNetCore.Mvc;

namespace FormulaDTournaments.Controllers
{
  [Route("api/[controller]/[action]")]
  public class RacerController : ControllerBase
  {
    private IRacerStore _racerStore;
    private IRaceStore _raceStore;
    public RacerController(IStoreFactory storeFactory) : base(storeFactory)
    {
      _racerStore = _storeFactory.RacerStore;
      _raceStore = _storeFactory.RaceStore;
    }
    
    [HttpPost]
    public JsonResult AddRacer(RacerModel racerModel)
    {
      var racer = _racerStore.GetByName(racerModel.Name) ?? _racerStore.CreateRacer(racerModel.Name);
      var racerStanding = new RaceStanding{
        RacerId = racer.Id,
        RaceId = Guid.Parse(racerModel.RaceId),
        Tire = racerModel.Tire,
        Brakes = racerModel.Brakes,
        Transmission = racerModel.Transmission,
        Body = racerModel.Body,
        Engine = racerModel.Engine,
        Handling = racerModel.Handling
      };
      
      racerStanding = _raceStore.AddRaceStanding(racerStanding);

      return new JsonResult(racerStanding);
    }
  }
}