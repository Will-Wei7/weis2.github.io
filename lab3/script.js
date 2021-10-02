$(document).ready(function() {
    //get elements
    var lis = document.querySelectorAll('.top li');
    var items = document.getElementsByClassName('item');
    //do a loop for li
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        //Triggered after the mouse passes over Li
        lis[i].onclick = function () {
        //Loop through the secondary box item, clearing the style before each li and item
            for (var j = 0; j < items.length; j++) {
                lis[j].className = '';
                items[j].style.display = 'none';
            }
            this.className = 'current';
            items[this.index].style.display = 'block';
        }
    }
    
  $('.nav a').on('click', function() {
    if ($(this).next().css('display') == "none") {
      //not slide down, then slide down
      $('.nav-item').children('ul').slideUp(300);
      $(this).next('ul').slideDown(300);
      $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
    } else {
      //already slide down,then slide up
      $(this).next('ul').slideUp(300);
      $('.nav-item.nav-show').removeClass('nav-show');
    }
  });
});