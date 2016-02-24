var divNamesForResumeTitles = [];

function addDivNamesToArray()
{
	
	$('#scrollText').children('div').each(function () 
	{
		divNamesForResumeTitles.push($(this).attr('id'));
	});
}

function initializeDiv(divId)
{
	var indexOfDivInArray;
	if( divNamesForResumeTitles.length > 0 && (indexOfDivInArray = divNamesForResumeTitles.indexOf(divId)) != -1)
	{
		divNamesForResumeTitles.splice(indexOfDivInArray, 1);
		$('#' + divId).css({'opacity' : '0.9'});
		$('#' + divId).css({'filter' : 'alpha(opacity=90)'});
		
		var divElement = document.getElementById(divId);
		
		if(!divElement.classList.contains('animateType'))
		{
			divElement.classList.add('animateType');
		}
	}
}


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
						
						//$('#scrollText').children('div').each(function () 
						divNamesForResumeTitles.forEach(function(currentValue)
						{
							//var myId = $(this).attr('id');
							var myIdTopPos = Math.round($('#' + currentValue).position().top);
							var myIdBottomPos = $('#' + currentValue + " img:first-of-type").position().top;
							/*
							if($('#' + myId).is(":mcsInView")) // "this" is the current element in the loop
							{
								alert("yes");
							}
							*/
							
							if(contentTopPos >= myIdTopPos && contentTopPos<=  myIdBottomPos)
							{
								pageScroll(currentValue);
							}
						});
					},
					
					onTotalScroll:function()
					{
						var arrLen = divNamesForResumeTitles.length;
						if(arrLen > 0)
						{
							pageScroll(divNamesForResumeTitles[arrLen - 1]);
						}
						
					}
				}
			
			});
	
	});
	
}

)(jQuery);


function pageScroll(scrollToElementId) 
{	
	/******* this call before changed scroll to jquery plugin
	smoothScroll(document.getElementById('scrollArea'), document.getElementById(scrollToElementId).offsetTop);
	*******/
	
	var divElement = document.getElementById(scrollToElementId);
	$("#scrollArea").mCustomScrollbar('scrollTo',Math.round($(divElement).position().top),{scrollEasing:"easeOut"});
	
	initializeDiv(scrollToElementId);
	
	/*
	divElement.style.opacity = "0.9";
	divElement.style.filter  = 'alpha(opacity=90)';
	
	if(!divElement.classList.contains('animateType'))
	{
		divElement.classList.add('animateType');
	}
	*/
}
