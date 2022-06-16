var header = document.getElementById("xHeader");
var navbar = document.getElementById("xNavbar");
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
    }
    else
    {
        navbar.classList.remove("sticky");
    }
}