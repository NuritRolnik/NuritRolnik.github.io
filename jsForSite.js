var g_INTERVAL;

(function($)
{
    $(window).load(function()
	{
        $("#scrollArea").mCustomScrollbar
			({
				theme:"rounded-dots",
				callbacks:
				{
					onScroll:function()
					{
						/*
						alert(this.mcs.top);
						alert("this is div pos " +Math.round($(divElement).position().top));
						*/
						
						var contentTopPos = Math.round((this.mcs.top)*(-1));
						
						$('#scrollText').children('div').each(function () 
						{
							var myId = $(this).attr('id');
							var myIdTopPos = Math.round($('#' + myId).position().top);
							var myIdBottomPos = $('#' + myId + " img:first-of-type").position().top;
							//var myIdBottomPos = Math.round($('#' + myId).position().bottom);
							/*
							if($('#' + myId).is(":mcsInView")) // "this" is the current element in the loop
							{
								alert("yes");
							}
							*/
							
							if(contentTopPos >= myIdTopPos && contentTopPos<=  myIdBottomPos)
							{
								$('#' + myId).css({"opacity" : "0.9"});
								//$('#' + myId).css.filter  = 'alpha(opacity=90)';
							}
						});
					}
				}
			
			});
	
	});
	
}

)(jQuery);

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
	/******* this call before changed scroll to jquery plugin
	smoothScroll(document.getElementById('scrollArea'), document.getElementById(scrollToElement).offsetTop);
	*******/
	
	var divElement = document.getElementById(scrollToElement+'Div');
	$("#scrollArea").mCustomScrollbar('scrollTo',Math.round($(divElement).position().top),{scrollEasing:"easeOut"});
	
	divElement.style.opacity = "0.9";
	divElement.style.filter  = 'alpha(opacity=90)';
	
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

function repositionRelativeElement(ReposeElement, relativeElement , leftDist, topDist)
{
	var myElement = document.getElementById(ReposeElement);
	//var relativeElement = document.getElementById(relatElement);
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