In this lab, I spend 10 hours. First, I made a logo block on the top as a navigation item. In the index page, it links to the website of RPI. And then I made a navigation menu that fixed in the left side of website, which includes 4 items: Information, Core Faculty and Interesting News. Except 5 interest news, all of information are in index page. I made 4 boxes, the tag is <item>, and once you click each item, it will show up each box. The js code to achieve this function is right here:

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

In the information box, I include many information from ITWS website. For undergraduate information, I use 3 drop down list to show the course requirements. And for Minor and Graduate information, I use one drop down list to show each one's core requirement. The js code to achieve lists slide down and up is here:
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

On faculty box, I use a rotate effect to show professors' experiences or research interest. There are two sides of each professor's box. The face div will show the photo, name, and title of each prof. And once you hover the div, it will rotate to the hip div that show more details of professors. Two main code to achieve this rotate effect is using 
transform-style: preserve-3d;
transform: rotateY(180deg); 
backface-visibility: hidden;

About Interesting news, I just created 5 new items and made each one linked to a website. By clicking the RPI icon you can back to the index page.
In Contact us box, you can go to ITWS blog by clicking the picture.
   