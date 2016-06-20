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
						
						var contentTopPos = Math.round((this.mcs.top)*(-1));
						
						divNamesForResumeTitles.forEach(function(currentValue)
						{
							var myIdTopPos = Math.round($('#' + currentValue).position().top);
							var myIdBottomPos = $('#' + currentValue + " img:first-of-type").position().top;
							
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
	
	var divElement = document.getElementById(scrollToElementId);
	$("#scrollArea").mCustomScrollbar('scrollTo',Math.round($(divElement).position().top),{scrollEasing:"easeOut"});
	
	initializeDiv(scrollToElementId);
}
