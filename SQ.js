var SQ_choosen;var SQ_sent = false;var SQ_attackWorking = false;var SQ_otherInterval;var SQ_btns = [];function SQ_openMenu(){$(".SQ_menutogle").toggleClass('margin_200');}
function SQ_addBtn(text, fn,c){SQ_btns.push('<li class="btnnn '+c+'" onclick="'+fn+'()">'+text+'</li>');}
/* Przyspiesz Szkolenie 1 click 1 przyspieenie */
function fastIt(){$('button[name=fast_finish_training]')[0].click()}
/* znajdź type jednostek */
function getType(){return  $('.soldier-container').find('input').attr('id');}
function getSubmit(){return $('.soldier-container').find('.large-circle-buttons').attr('id');}
function setTrain(){$('#'+getType()).val(50);submitTrain();}
function submitTrain(s){$('#'+getSubmit()).click()}
function getType(){return  $('.soldier-container').find('input').attr('id');}
function getSubmit(){return $('.soldier-container').find('.large-circle-buttons').attr('id');}
var SQ_most = 0;
/* wysyłaj ataki na szpiegowane wioski*/
var SQ_autoattack = function(){if(SQ_attackWorking == false){SQ_otherInterval = setInterval(function(){openTwierdza()},1000);$('.SQ_startattack').find('.ui-buttons').css('background-color','rgba(255,255,255,.7)');SQ_attackWorking = true;}else{clearInterval(SQ_otherInterval);$('.SQ_startattack').find('.ui-buttons').css('background-color','rgba(0,0,0,0)');SQ_attackWorking = false;}}
var openTwierdza = function(){
	if($('#widget-missions').find('.ui-icon').length) return;

	
	$('body').trigger(jQuery.Event( 'keyup', { keyCode: 67, which: 67 } ));clearInterval(SQ_otherInterval);SQ_otherInterval=setInterval(function(){openSpies()},1000)}
var openSpies = function(){if(!$('#operation-center').find('.tab-espionage').find('a').length)return;clearInterval(SQ_otherInterval);$('#operation-center').find('.tab-espionage').find('a')[0].click();SQ_otherInterval = setInterval(function(){SQ_infiltrate()},1000)}
var SQ_infiltrate = function(){if(!$('.infiltrate-all').length)return;clearInterval(SQ_otherInterval);$('.infiltrate-all')[0].click();SQ_otherInterval = setInterval(function(){SQ_chooseVictim()},1000)}
var SQ_setVictim = function(v){SQ_chosen = v.find('.attack');}
var SQ_chooseVictim = function(){

	if(!$('.spy-mass-report-content').length)return;
	clearInterval(SQ_otherInterval);
	var rows = $('.spy-mass-report-content').find('table').first().find('tr').find('.prov-pict');
	var lenn = rows.length;
	$.each(rows, function(index){
		if(!$(this).closest('tr').find('td.wood').length) return;
		var text = parseInt($(this).closest('tr').find('td.wood').html().trim().replace('&nbsp;', ''));
		if(text > SQ_most){SQ_most = text;SQ_setVictim($(this).closest('tr'));}
		if(index == lenn-1){
			SQ_chosen.click();
			SQ_otherInterval = setInterval(function(){SQ_FillUpArmy()},1000);
			SQ_most = 0;
		}
		});
		}
var SQ_pickUpVitim = function()
{
	
}
var SQ_FillUpArmy = function(){if(!$('#select-all-army').length)return;clearInterval(SQ_otherInterval);$("#select-all-army").click();SQ_otherInterval = setInterval(function(){SQ_sendAttack()},1000)}
var SQ_sendAttack =function(){if(!$('button[name=sendAttack]').length)return;clearInterval(SQ_otherInterval);$('button[name=sendAttack]').click();SQ_closeAll();}
var SQ_closeAll = function(){clearInterval(SQ_otherInterval);setTimeout(function(){	$.each($('.window-title').find('a.close'), function(){$(this)[0].click()});if(SQ_attackWorking == true){SQ_otherInterval = setInterval(function(){openTwierdza()},1000)}},2000);}




function SQ_addButtons(){if($('.btnnn').length) return;
	SQ_addBtn('<div class="ui-bg ui-buttons"><a class="ui-small-icon zoom" href="javascript:void(0);" rel="village-zoom"></a></div>','SQ_autoattack', 'SQ_startattack');
	$('body').append('<style>.SQ_active{background-color:rgba(0,142,255,.4)}.SQ_List{padding:0;margin:0;}.btnnn{list-style-type:none;cursor:pointer;padding:5px;padding-left:20px;}#SQ_menu{position:fixed;left:-55px;top:50%;width:30px;height:30px;background-image:url(https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png);background-size:contain;background-color:rgba(255,255,255,.6);border-top-right-radius:3px;border-bottom-right-radius:3px;border:1px solid rgba(0,0,0,.5);transition:all 1s;border-left:none}#SQ_menu_open{position:fixed;left:-15px;top:45%;border-top-right-radius:3px;border-bottom-right-radius:3px;transition:all 1s;border-left:none}.margin_200{margin-left:160px;}</style><div id="SQ_menu_open" class="SQ_menutogle"><ul class="SQ_List">'+SQ_btns.join('')+'</ul></div></div>');
}SQ_addButtons();


