// Carousel base function. Uses Django template language to query information from backend
// then adds it to an array for users to look through on the clientside.
// Whether the arrows clicked or image/tabs pressed, the order will be the same.
// Written for Playbookkids.com
var index = 0;

var package_info = [];

// Django code that means nothing in this example and will obviously not work.
{% for featured_provider in featured_providers %}
    package_info.push('{{featured_provider.pk}}');
{% endfor %}

$('.provider_selector').click(function(event) {
    var target  = event.target;
    var provider_pk = $(target).data('provider-pk');
    $('.provider_selector').removeClass('active');
    $(target).addClass('active');
    $('.coach_info_container').hide();
    $('.coach_info_container[data-provider-pk=' + provider_pk + ']').show();
    var active = $('.provider_selector.active').index();
    index = active;
});

/*Cycles through array of providers when clicked*/
$('.navigator_right').click(function(){
    $('.coach_info_container').hide();
    $('.provider_selector').removeClass('active');
    if ((index + 1) > (package_info.length - 1)){
        index = 0;
    }
    else {
        index += 1;
    }
    $('.coach_info_container[data-provider-pk=' + package_info[index] + ']').show();
    $('.provider_selector[data-provider-pk=' + package_info[index] + ']').addClass('active');
    index = index % package_info.length;
});

$('.navigator_left').click(function(){
    $('.coach_info_container').hide();
    $('.provider_selector').removeClass('active');
    if (index - 1 < 0){
        index = package_info.length - 1;
    }
    else {
        index -= 1;
    }
    $('.coach_info_container[data-provider-pk=' + package_info[index] + ']').show();
    $('.provider_selector[data-provider-pk=' + package_info[index] + ']').addClass('active');
    index = index % package_info.length;
});