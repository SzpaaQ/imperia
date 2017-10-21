var SQ_most 			= 0,SQ_choosen, SQ_sent = false, SQ_attackWorking = false, SQ_otherInterval, SQ_btns = [];var formation = 4;
var SQ_army				= {};
var getArmy				= function(step)
{
	
}
var SQ_addBtn 			= function(text, fn,c){SQ_btns.push('<div class="'+c+' pull-right" onclick="'+fn+'()">'+text+'</div>');}
var SQ_commitBtns 		= function(){SQ_addButtons();$('.ui-bottom-right').append(SQ_btns.join(''));}
var SQ_autoattack 		= function(){if(SQ_attackWorking == false){SQ_otherInterval = setInterval(function(){spy()},1000);$('.SQ_startattack').find('.ui-buttons').css('background-color','rgba(255,255,255,.7)');SQ_attackWorking = true;}else{clearInterval(SQ_otherInterval);$('.SQ_startattack').find('.ui-buttons').css('background-color','rgba(0,0,0,0)');SQ_attackWorking = false;}}
var spy 				= function(lvl){if($('#widget-missions').find('.mission-my').length) return;if(!lvl) lvl = 7;xajax_doMassSpy(container.open({saveName:'mass-spy-report-100'+lvl, title:'Masowe szpiegostwo: Niezależne miasto'}),{'uId':1000+lvl,'isUserHolding':'1', 'page': 1});clearInterval(SQ_otherInterval);SQ_otherInterval=setInterval(function(){SQ_setVictim()},1000)}
var SQ_setVictim 		= function(v){SQ_chosen = v.find('.attack');}
var SQ_chooseVictim 	= function(){if(!$('.spy-mass-report-content').length)return;clearInterval(SQ_otherInterval);var rows = $('.spy-mass-report-content').find('table').first().find('tr').find('.prov-pict');var lenn = rows.length;$.each(rows, function(index){if(!$(this).closest('tr').find('td.wood').length) return;var text = parseInt($(this).closest('tr').find('td.wood').attr('title').trim().replace('&nbsp;', '').replace(',0K', '000').replace(',0M', '000'));if(text > SQ_most){SQ_most = text;SQ_setVictim($(this).closest('tr'));}if(index == lenn-1){SQ_chosen.click();SQ_otherInterval = setInterval(function(){SQ_FillUpArmy()},1000);SQ_most = 0;}});}
var SQ_FillUpArmy 		= function(){if(!$('#select-all-army').length)return;clearInterval(SQ_otherInterval);$("#select-all-army").click();$('.ui-pass[name=formation]').val(formation).trigger('change');	SQ_otherInterval = setInterval(function(){SQ_sendAttack()},1000)}
var SQ_sendAttack 		= function(){if(!$('button[name=sendAttack]').length)return;clearInterval(SQ_otherInterval);$('button[name=sendAttack]').click();SQ_closeAll();}
var SQ_closeAll 		= function(){clearInterval(SQ_otherInterval);setTimeout(function(){	$.each($('.window-title').find('a.close'), function(){$(this)[0].click()});if(SQ_attackWorking == true){SQ_otherInterval = setInterval(function(){openTwierdza()},1000)}},2000);}
var SQ_addButtons 		= function(){if($('.btnnn').length) return;
	SQ_addBtn('<div class="ui-bg ui-buttons"><a class="ui-small-icon "style="background-image:url(https://maxcdn.icons8.com/Share/icon/Military//sword1600.png);background-size:contain;" href="javascript:void(0);" rel="village-zoom"></a></div>','SQ_autoattack', 'SQ_startattack');
}
SQ_commitBtns();

