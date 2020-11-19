$(document).ready(function() {
    $("img").on("click", function(event) {
        var x = event.pageX - this.offsetLeft;
        var y = event.pageY - this.offsetTop;
        alert("X Coordinate: " + x + " Y Coordinate: " + y);
    });
});


$(function() {
$("#test").click(function(e) {
  var offset = $(this).offset();
  var relativeX = (e.pageX - offset.left);
  var relativeY = (e.pageY - offset.top);
  alert(relativeX+':'+relativeY);
  $(".position").val("afaf");
});
});
   


$('#image-map area').hover(
    function () { 
        var coords = $(this).attr('coords').split(','),
            width = $('.image-map-container').width(),
            height = $('.image-map-container').height();
        $('.image-map-container .map-selector').addClass('hover').css({
            'left': coords[0]+'px',
            'top': coords[1] + 'px',
            'right': width - coords[2],
            'bottom': height - coords[3]
        })
    },
    function () { 
        $('.image-map-container .map-selector').removeClass('hover').attr('style','');
    }
)


