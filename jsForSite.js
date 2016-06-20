
function hoverNavLink(element, animationName)
{
	if(element.classList.contains(animationName))
	{
		element.classList.remove(animationName);
	}
	
	element.offsetWidth = element.offsetWidth;
	element.classList.add(animationName);
}

function addGpa(elementId)
{
	
	var newString;
	
	switch(elementId)
	{
		case 'compSc':
			newString = "Computer Science (GPA 83)";
			break;
		case 'medSt':
			newString = "Media studies (GPA 92)";
			break;
		default:
			newString = "";
	}
	document.getElementById(elementId).innerHTML = newString;
}

function removeGpa(elementId)
{
	var newString;
	
	switch(elementId)
	{
		case 'compSc':
			newString = "Computer Science";
			break;
		case 'medSt':
			newString = "Media studies";
			break;
		default:
			newString = "";
	}
	document.getElementById(elementId).innerHTML = newString;
}

function repositionRelativeElement(ReposeElement, relativeElement , leftDist, topDist)
{
	var myElement = document.getElementById(ReposeElement);
	myElement.style.left = relativeElement.offsetLeft + leftDist+'px';
	myElement.style.top = relativeElement.offsetTop + topDist+'px';
	myElement.style.opacity = "0.9";
	myElement.style.filter  = 'alpha(opacity=90)';
	
	if(!myElement.classList.contains('animateTypeEmail'))
	{
		myElement.classList.add('animateTypeEmail');
	}
	
}

function repositionIfLoaded(ReposeElement, relatElement , leftDist, topDist)
{
	var relativeElement = document.getElementById(relatElement);
	
	if(relativeElement.complete)
	{
		repositionRelativeElement(ReposeElement, relativeElement , leftDist, topDist);
	}
	else
	{
		relativeElement.onload = repositionRelativeElement(ReposeElement, relativeElement , leftDist, topDist);
	}
}