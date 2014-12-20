$(document).ready(function() {

  setTimeout(function(){
    $('.part-1').addClass('active');
  }, 4000);

  $(".part-2 h1").lettering()

  var itemList = [0,1,2,3,4]

  setRandomClass(itemList);
  $('.happy > div').click(function(){
    if ($(this).hasClass('selected')) {
      setRandomClass(itemList);
      $(this).find('img').addClass('tada');
      setTimeout(function(){
        $('.happy img').removeClass('tada');
      }, 500);

      var number = $('.bells audio.selected').index();
      $('.bells audio').get(number).play();
    }
  });

  function setRandomClass(itemList) {
    var items = $(".happy").find("> div");
    var random = Math.floor(Math.random() * itemList.length);
    items.removeClass("selected");
    setTimeout(function(){
      items.eq(random).addClass("selected");
    }, 300);
  }

  $(".bells audio").on("ended", function(){
    var selectedBell = $(this);
    if (selectedBell.is(':last-child')) {
      $('.part-1').addClass('bounceOutUp');
      $('.song').get(0).play();
      $('#bgvid').get(0).play();

      setTimeout(function(){
        $('.part-2').addClass('active');
        $(".part-2 h1").animateLetters({top:-40,opacity:0},{top:0,opacity:1},{randomOrder:false,time:600,reset:true});
      }, 2000);
    } else {
      selectedBell.removeClass().next("audio").addClass('selected')
    }
  });
});