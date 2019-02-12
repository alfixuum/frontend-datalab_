
function test(){
  $('.circles').show(1000, function(){
  setTimeout(function(){
    $('.circles').hide(1000);
  }, 5000);
});
$('.circles').hide(1000, function(){
  setTimeout(function(){
    $('.circles').show(1000);
  }, 5000);
});
}
 
setInterval( test, 5 * 1000 );
