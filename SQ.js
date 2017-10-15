var SQ_most 			= 0,SQ_choosen, SQ_sent = false, SQ_attackWorking = false, SQ_otherInterval, SQ_btns = [];
var SQ_addBtn 			= function(text, fn,c){SQ_btns.push('<li class="btnnn '+c+'" onclick="'+fn+'()">'+text+'</li>');}
var SQ_commitBtns 		= function(){SQ_addButtons();$('body').append('<div id="SQ_menu_open" class="SQ_menutogle"><ul class="SQ_List">'+SQ_btns.join('')+'</ul></div></div>');}
var SQ_autoattack 		= function(){if(SQ_attackWorking == false){SQ_otherInterval = setInterval(function(){openTwierdza()},1000);$('.SQ_startattack').find('.ui-buttons').css('background-color','rgba(255,255,255,.7)');SQ_attackWorking = true;}else{clearInterval(SQ_otherInterval);$('.SQ_startattack').find('.ui-buttons').css('background-color','rgba(0,0,0,0)');SQ_attackWorking = false;}}
var openTwierdza 		= function(){if($('#widget-missions').find('.ui-icon').length) return;$('body').trigger(jQuery.Event( 'keyup', { keyCode: 67, which: 67 } ));clearInterval(SQ_otherInterval);SQ_otherInterval=setInterval(function(){openSpies()},1000)}
var openSpies 			= function(){if(!$('#operation-center').find('.tab-espionage').find('a').length)return;clearInterval(SQ_otherInterval);$('#operation-center').find('.tab-espionage').find('a')[0].click();SQ_otherInterval = setInterval(function(){SQ_infiltrate()},1000)}
var SQ_infiltrate 		= function(){if(!$('.infiltrate-all').length)return;clearInterval(SQ_otherInterval);$('.infiltrate-all')[0].click();SQ_otherInterval = setInterval(function(){SQ_chooseVictim()},1000)}
var SQ_setVictim 		= function(v){SQ_chosen = v.find('.attack');}
var SQ_chooseVictim 	= function(){if(!$('.spy-mass-report-content').length)return;clearInterval(SQ_otherInterval);var rows = $('.spy-mass-report-content').find('table').first().find('tr').find('.prov-pict');var lenn = rows.length;$.each(rows, function(index){if(!$(this).closest('tr').find('td.wood').length) return;var text = parseInt($(this).closest('tr').find('td.wood').html().trim().replace('&nbsp;', ''));if(text > SQ_most){SQ_most = text;SQ_setVictim($(this).closest('tr'));}if(index == lenn-1){SQ_chosen.click();SQ_otherInterval = setInterval(function(){SQ_FillUpArmy()},1000);SQ_most = 0;}});}
var SQ_FillUpArmy 		= function(){if(!$('#select-all-army').length)return;clearInterval(SQ_otherInterval);$("#select-all-army").click();SQ_otherInterval = setInterval(function(){SQ_sendAttack()},1000)}
var SQ_sendAttack 		= function(){if(!$('button[name=sendAttack]').length)return;clearInterval(SQ_otherInterval);$('button[name=sendAttack]').click();SQ_closeAll();}
var SQ_closeAll 		= function(){clearInterval(SQ_otherInterval);setTimeout(function(){	$.each($('.window-title').find('a.close'), function(){$(this)[0].click()});if(SQ_attackWorking == true){SQ_otherInterval = setInterval(function(){openTwierdza()},1000)}},2000);}
var SQ_addButtons 		= function(){if($('.btnnn').length) return;
	SQ_addBtn('<div class="ui-bg ui-buttons"><a class="ui-small-icon zoom" href="javascript:void(0);"></a></div>','SQ_autoattack', 'SQ_startattack');
}
SQ_commitBtns();



