$(document).ready(function() {

  setTimeout(function(){
    $('.part-1').addClass('active');
  }, 4000);

  $(".part-2 h1").lettering()

  setRandomClass();
  $('.happy > div').click(function(){
    if ($(this).hasClass('selected')) {
      setRandomClass();
      $('.happy img').removeClass('tada');
      $(this).find('img').addClass('tada');
    }
  });

  function setRandomClass() {
    var parent = $(".happy");
    var items = parent.find("> div");
    var number = items.length;
    var random = Math.floor((Math.random() * number));
    items.removeClass("selected");
    items.eq(random).addClass("selected");
  }

  $('.holidays').click(function(){
    $('.part-1').addClass('bounceOutUp');
    $('#bgvid').get(0).play();

    setTimeout(function(){
      $('.part-2').addClass('active');
      $(".part-2 h1").animateLetters({top:-40,opacity:0},{top:0,opacity:1},{randomOrder:false,time:600,reset:true});
    }, 2000);
  });
});