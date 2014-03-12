$('#sidebar').affix({
    offset: {
        top: $('header').height()
    }
});

$(document).ready(function() {
    var resizeTitle = function() {
        var width = parseInt($(".title__container").width());
        $(".title.main").css(
            'font-size',
            Math.min(Math.max(width/3, 30), 78)
        );
        $(".title.date-title").css(
            'font-size',
            Math.min(Math.max(width/4.5, 16), 48)
        );
        $('.title').css('display', 'block');
    };

    window.onresize = resizeTitle;

    resizeTitle();
});
