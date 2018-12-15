using FormulaDTournaments.Stores;
using Microsoft.AspNetCore.Mvc;

namespace FormulaDTournaments.Controllers
{
  public class ControllerBase: Controller
  {
    protected readonly IStoreFactory _storeFactory;

    public ControllerBase(IStoreFactory storeFactory)
    {
      _storeFactory = storeFactory;
    }
  }
}