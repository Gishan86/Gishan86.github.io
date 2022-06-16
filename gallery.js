var lightbox = document.getElementById("xLightbox");
var gallery = document.getElementById("xContent");

// Open the Modal
function openModal()
{
	lightbox.style.display = "block";
	gallery.style.display = "none";
}

// Close the Modal
function closeModal()
{
	lightbox.style.display = "none";
	gallery.style.display = "";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n)
{
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n)
{
	showSlides(slideIndex = n);
}

function showSlides(n)
{
	// slide min/max
	var slides = document.getElementsByClassName("slide");
	if (n > slides.length)
	{
		slideIndex = slides.length;
	}
	else if (n < 1)
	{
		slideIndex = 1;
	}
	
	// slide navigation
	var i;
	for (i = 0; i < slides.length; i++)
	{
		slides[i].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";
	
	// slide caption text
	var parts = slides[slideIndex-1].title.split('|');
	var captionText = document.getElementById("slide-caption");
	captionText.innerHTML = parts[0];
	var captionInfos = document.getElementById("slide-infos");
	captionInfos.innerHTML = parts[1];
	
	// slideshow dots
	var dots = document.getElementsByClassName("dot");
	for (i = 0; i < dots.length; i++)
	{
		dots[i].classList.remove("active"); /*className.replace(" active", "");*/
	}
	dots[slideIndex-1].classList.add("active"); /*.className += " active";*/
}