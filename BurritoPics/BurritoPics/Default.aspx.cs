using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace BurritoPics
{
	public partial class _Default : System.Web.UI.Page
	{
		private List<string> OpeningPhrases = new List<string>()
		{
			"We got pics of burritos!!!",
			"For when you need pics of burritos, fast!",
			"It's a real burritopic-me-up!!",
			"Pictures of delicious burrito are our specialty!!!"
		};

		protected void Page_Load(object sender, EventArgs e)
		{
			GetBurritoPics();

		}

		private void GetBurritoPics()
		{
			string[] filesindirectory = Directory.GetFiles(Server.MapPath("~/Burritos"));
			List<String> images = new List<string>(filesindirectory.Count());

			foreach (string item in filesindirectory)
			{
				images.Add(String.Format("~/Burritos/{0}", System.IO.Path.GetFileName(item)));
			}

			RepeaterImages.DataSource = images;
			RepeaterImages.DataBind();
		}
	}
}
