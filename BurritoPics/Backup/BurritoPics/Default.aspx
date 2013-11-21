<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true"
	CodeBehind="Default.aspx.cs" Inherits="BurritoPics._Default" %>

<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent">
	<script type="text/javascript">
		function getRandRange(low, high) {

			var adjustedHigh = (parseFloat(high) - parseFloat(low)) + 1;
			var numRand = Math.floor(Math.random()*adjustedHigh) + parseFloat(low);

			if (parseFloat(low) <= parseFloat(high) && (low != '') && (high != '')) {
			   return numRand;
			} else {
				return 0;
			}
		}

		$(function () {
			$('.BurritoImage').each(function () {
				var numRand = getRandRange(1000, 5500);
				$(this).show("blind", null, numRand);
			});
		});
	</script>

</asp:Content>

<asp:Content ID="TitleContent" runat="server" ContentPlaceHolderID="TitleContent">
	We got pics of burritos!!</asp:Content>

<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="MainContent">
	<ul class="BurritoPics1">
	<asp:Repeater ID="RepeaterImages" runat="server">
		<ItemTemplate>
			<li>
				<asp:Image ID="BurritoImage" CssClass="BurritoImage" runat="server" ImageUrl='<%# Container.DataItem %>' AlternateText="Burrito" />
			</li>
		</ItemTemplate>
	</asp:Repeater>
	<li>
</ul>

</asp:Content>
