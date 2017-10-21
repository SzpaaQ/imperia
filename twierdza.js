var x = [];
xjxfun:doMassSpy
x.push('Soperation-center-map');
var d = new Date();
var n = d.getTime();
x.push(n);
x.push('<xjxobj><e><k>cX</k><v>N2001</v></e><e><k>cY</k><v>N-900</v></e><e><k>id</k><v>Swb9700</v></e><e><k>type</k><v>N9701</v></e><e><k>w</k><v>N7</v></e><e><k>x</k><v>N2001</v></e><e><k>y</k><v>N-900</v></e><e><k>vexok</k><v>Btrue</v></e></xjxobj>');
$.post('xajax_loader.php',
{
	xjxfun:'sendAttackWorldboss',
	xjxargs:x
},
function(data){
	alert(data);
	//$('.sq_xxx').html(data);
}
)


var x = [];
x.push('mass-spy-report-1007');

var spy = function(lvl){if(!lvl) lvl = 7;xajax_doMassSpy(container.open({saveName:'mass-spy-report-100'+lvl, title:'Masowe szpiegostwo: Niezależne miasto'}),{'uId':100+lvl,'isUserHolding':'1', 'page': 1});}
xjxargs[]:<xjxobj><e><k>uId</k><v>N107</v></e><e><k>isUserHolding</k><v>S1</v></e><e><k>page</k><v>N1</v></e><e><k>vexok</k><v>Btrue</v></e></xjxobj>
Name

javascript:void(xajax_doMassSpy(container.open({saveName:'mass-spy-report-1007', title:'Masowe szpiegostwo: Niezależne miasto'}),{'uId':1007,'isUserHolding':'1', 'page': 1}));
xajax_doMassSpy = function() { return xajax.request( { xjxfun: 'doMassSpy' }, { parameters: arguments } ); };
