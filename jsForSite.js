var g_INTERVAL;

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

function pageScroll(scrollToElement) 
{	
	//document.getElementById('scrollArea').scrollTo(0, document.getElementById(scrollToElement).offsetTop);
	
	smoothScroll(document.getElementById('scrollArea'), document.getElementById(scrollToElement).offsetTop);
	
	var divElement = document.getElementById(scrollToElement+'Div');
	
	/*if(divElement.classList.contains('animateType'))
	{
		divElement.classList.remove('animateType');
	}
	
	divElement.offsetWidth = divElement.offsetWidth;*/
	divElement.style.opacity = "0.9";
	divElement.style.filter  = 'alpha(opacity=90)';
	/*divElement.classList.add('animateType');*/
	
	if(!divElement.classList.contains('animateType'))
	{
		divElement.classList.add('animateType');
	}
}

function smoothScroll(scrollFromElement, scrollToElement)
{
	var moving_frequency = 25;
	var currTop = scrollFromElement.scrollTop;
	var scrollLength = scrollToElement - currTop;
	var scrollStep = Math.round(scrollLength/moving_frequency);
	
	clearInterval(g_INTERVAL);
	console.log("currTop is "+ currTop);
	g_INTERVAL = setInterval(function(){smoothScrollStep(scrollStep,scrollToElement,scrollFromElement);},10);
	/*var previousTop = currTop;
	while(currTop != scrollToElement)
	{
		
		if(Math.abs(currTop + scrollStep) > scrollToElement)
		{
			scrollStep = scrollToElement - currTop;
		}
		previousTop = currTop;
		scrollFromElement.scrollTop+= scrollStep; 
		currTop = scrollFromElement.scrollTop;
		
		if(previousTop == currTop)
		{
			currTop = scrollToElement;
		}
		
	}*/
}

function smoothScrollStep(scrollStep, scrollToElement, scrollFromElement)
{
	var currTop = scrollFromElement.scrollTop;
	var previousTop = currTop;
	console.log("currTop now is "+ currTop);
	if((((currTop + scrollStep) > scrollToElement)&&(scrollStep>0)) || (((currTop + scrollStep) < scrollToElement)&&(scrollStep<0)))
	{
		scrollStep = scrollToElement - currTop;
	}
	
	scrollFromElement.scrollTop+= scrollStep; 
	currTop = scrollFromElement.scrollTop;
	
	if(previousTop == currTop || scrollToElement == currTop)
	{
		clearInterval(g_INTERVAL);
	}
}

function repositionRelativeElement(ReposeElement, relatElement , leftDist, topDist)
{
	var myElement = document.getElementById(ReposeElement);
	var relativeElement = document.getElementById(relatElement);
	myElement.style.left = relativeElement.offsetLeft + leftDist+'px';
	myElement.style.top = relativeElement.offsetTop + topDist+'px';
	
}