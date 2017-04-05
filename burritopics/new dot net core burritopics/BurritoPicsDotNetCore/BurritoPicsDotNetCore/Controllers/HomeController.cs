using Microsoft.AspNetCore.Mvc;

namespace BurritoPicsDotNetCore.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

		public IActionResult About()
		{
			return View("UnderConstruction");
		}

		public IActionResult Contact()
		{
			return View("UnderConstruction");
		}


        public IActionResult Error()
        {
            return View();
        }
    }
}
