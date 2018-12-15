using FormulaDTournaments.Models;
using FormulaDTournaments.Stores;
using Microsoft.AspNetCore.Mvc;

namespace FormulaDTournaments.Controllers
{
  [Route("api/[controller]/[action]")]
  public class RacerController : ControllerBase
  {
    private IRacerStore _racerStore;
    public RacerController(IStoreFactory storeFactory) : base(storeFactory)
    {
      _racerStore = _storeFactory.RacerStore;
    }
    
    [HttpPost]
    public JsonResult AddRacer(Racer racer)
    {
      
      var raceRacer = _racerStore.GetByName(racer.Name) ?? _racerStore.SaveRacer();
      
      
      return new JsonResult(string.Empty);
    }
  }
}