var header = document.getElementById("xHeader");
var navbar = document.getElementById("xNavbar");
var logo = document.getElementById("xLogo");
var sticky = navbar.offsetTop;

window.onscroll = function()
{
    toggleSticky();
};

function toggleSticky()
{
    if (window.pageYOffset > sticky)
    {
        navbar.classList.add("sticky");
		navbar.classList.add("shadow");
		logo.style.display = "block";
    }
    else
    {
        navbar.classList.remove("sticky");
		navbar.classList.remove("shadow");
		logo.style.display = "none";
    }
}