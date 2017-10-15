window.onload=function(){
  // form rawGit proxy url
  var url = 'https://gist.github.com/SzpaaQ/6895433b4b83693499cc446afd86e1cf/raw/843ec25d96196a8081b2efe12a055e8195f551ef/imperia.user.js';
  // download and run the script
  $('body').append('<div id="SQ_script"></div>');
  $.get('https://gist.github.com/SzpaaQ/6895433b4b83693499cc446afd86e1cf.js',function(data){
	  $('#SQ_script').html(data);
  })

}
