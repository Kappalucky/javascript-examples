// Show/Hide 'View' Text. orders certain type of content to specific tabs
// Written for Playbookkids.com

//view script - shows and hide "view" text on mobile and desktop
$(".view_journal_detail").hover(function(){ //desktop
    $(".view_hover").show();
},
function(){
    $(".view_hover").hide();
});
$(".view_journal_detail").on("touchstart", function(e) { //mobile
    $(".view_hover").show();
});
$(".view_journal_detail").on("touchend", function(e) {
    $(".view_hover").hide();
});
//end "view" script

//to top of page script - scrolls to top of page//
$(window).scroll(function(){ //scroll to top
    if ($(this).scrollTop() >= 1000) { //if page scrolled more than 1000px
        $('#to_top').fadeIn(400);
    } else {
        $('#to_top').fadeOut(400);
    }
});

$('#to_top').click(function() { // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0  // Scroll to top of body
    }, 500);
});
//end to top of page script//

//random color script - select random color background for student_feedbacks
var my_colors = ["#444444","#FBC858","#3982B0","#0F1300","#FF8F45","#FCB5AC","#3D5B59","#A44757","#F8D3B7","#00A572","#07d2be","#f24e70","#f7ac32"];
/*[0]-"Cool-Grey",[1]-"Mimosa",[2]-"Blue",[3]-"Black",[4]-"Orange",[5]-"Salmon",[6]-"Teal-Green",
[7]-"Marsala",[8]-"Peach",[9]-"Persian",[10]-"Blue-Green",[11]-"Fuchsia",[12]"Tangerine"*/
$(".journal_detail_container.student_feedbacks .journal_media_container").each(function(){
    $(this).css('background-color', my_colors[Math.floor(Math.random()*my_colors.length)]);
});
//end random color script

// SelectView script - loads specific content based on tab selected
function selectView(evt, keyName) {
    let i, user_tabs, tabs, valueKey, content;
    //removes all elements from page
    content = document.getElementsByClassName("journal_detail_container");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    //removes "active" from all tabs - shows nothing
    user_tabs = document.getElementById("user_tabs");
    tabs = user_tabs.getElementsByClassName("tabs");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace("/\bactive\b/g", "");
    }
    //adds "active" to selected tab element & shows content
    if (keyName === "all") {
        valueKey = document.getElementsByClassName("journal_detail_container");
    }
    else {
        valueKey = document.getElementsByClassName(keyName);
    }
    for (i = 0; i < valueKey.length; i++) {
        valueKey[i].style.display = "block";
    }
    for (i = 0; i < tabs.length; i++) {
        //if clicked add "active" class to current
        tabs[i].addEventListener("click", function() {
            let current = document.getElementsByClassName("active");
            for (i = 0; i < current.length; i++)
            $(current).removeClass("active");
            this.className += " active";
          });
    }
}

// Open on page load - default page
document.addEventListener("DOMContentLoaded", function() {
    $("#default_start").addClass("active");
    selectView(event, 'images');
});
// end SelectView script