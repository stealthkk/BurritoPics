using Microsoft.AspNetCore.Mvc;

namespace BurritoPics.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Order()
        {
            return View("UnderConstruction");
        }

        public IActionResult Register()
        {
            return View("UnderConstruction");
        }

        public IActionResult Submit()
        {
            return View("UnderConstruction");
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
