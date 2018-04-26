using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BurritoPics.Models;

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

        public IActionResult History()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
