/*
IMPERIA SCRIPT
V2.1
*/

var limit = 7;
var SQ_attackWorking 			= false;
var SQ_Interval					= false;
var SQ_btns 					= [];
var SQ_barbes					= [];
var SQ_temp 					= 99999999;
var SQ_level 					= 10;
var SQ_page 					= 1;
var SQ_openBarbes 				= function(){ if($('SQ_START').hasClass('start') || limit < parseInt($('.mission-my').find('.m-count').html())) return;clearInterval(SQ_Interval); $('.ui-fast-attack-barb')[0].click(); SQ_Interval = setInterval(SQ_chooseBarbe,2000);}
var SQ_getBarbeLevel 			= function(e){return parseInt($(e).find('.gp-flags').html());}
var SQ_nextPage					= function(){if(SQ_page == 4){SQ_closeAll(); setTimeOut(SQ_openBarbes, 2000);SQ_page=1;return}SQ_page++;$('.pager-nums').find('a[title='+SQ_page+']')[0].click();}
var SQ_closeAll 				= function(){setTimeout(function(){	$.each($('.window-title').find('a.close'), function(){$(this)[0].click()});},2000);}
var SQ_chooseBarbe = function()
{
	var myMissions = ($('.mission-my').find('.m-count').length) ? parseInt($('.mission-my').find('.m-count').html()) : 0;
	if(limit < myMissions) return;
	clearInterval(SQ_Interval);
	var cards = $('.barb-card');
	cards.each(function(i, el){
		SQ_temp = 'b_'+$(this).find('.barb-card-name').html().replace(/\D/g,'');

		if(SQ_barbes[SQ_temp]==true)
		{
			if(i == cards.length-1)
			{
				SQ_nextPage();
				SQ_Interval = setInterval(SQ_chooseBarbe,2000);
				return false;
			}
			return;
		}
		
		SQ_level = SQ_getBarbeLevel(this);
		SQ_barbes[SQ_temp] = true;
		$(this).find('.barb-card-buttons').find('a')[1].click();
		SQ_Interval= setInterval(SQ_setArmy, 2000);
		return false;
	});
}

var SQ_setArmy 					= function(){
	if(!$("#army_K2").length) return;
	clearInterval(SQ_Interval);
	var kuc = 100000;
	var miecz = 0;
	var luk = 0;
	if(SQ_level == 4) kuc = 10000;
	if(SQ_level == 5) kuc = 20000;
	if(SQ_level == 6) kuc = 20000;
	if(SQ_level == 7){ kuc = 20000; luk = 20000}
	if(SQ_level == 8){ kuc = 50000; luk = 20000}
	if(SQ_level == 9) kuc = 60000;
	if(SQ_level == 10) kuc = 100000;
	if(SQ_level == 11) kuc = 150000;
	$('#army_K2').val(kuc);
	$('#army_S2').val(luk);
	$('#army_M2').val(miecz);
	setTimeout(SQ_sendAttack, 1000);
}


var SQ_sendAttack				= function()
{
	$("#actionButtons").find('button[name=sendAttack]')[0].click();
	setTimeout(SQ_closeAll, 1000);
	SQ_Interval = setInterval(SQ_openBarbes, 3000);
	SQ_closeAll();
	
}

var toggleStart = function(){

	$("#SQ_START").toggleClass('start');
	if(!$("#SQ_START").hasClass('start')) {
			SQ_Interval = setInterval(SQ_openBarbes, 3000);
	}
	else{
		clearInterval(SQ_Interval);

	}
}

$('body').append('<style>.start{backhround:lime}</style><div id="SQ_START" style="position:fixed;top:50%;right:15px;background:white;width:15px;height:15px;"onclick="toggleStart()"> B</div>')


